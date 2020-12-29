const Discord = require('discord.js');
let ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
  let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor(ayarlar.hata).setDescription(`Bu özelliği kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısınız.`));
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Doğru kullanım: \`-yavaşmod [1/120]\``)
                .setColor("#36393F")
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 120 || limit < 1) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("Süre limiti <maksimum/minimum> **[1/120]** saniye olabilir. ").setColor(ayarlar.hata));
}
    message.channel.send(new Discord.MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor(ayarlar.oldu));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 0,
};

exports.help = {
  name: 'yavaş-mod'
};