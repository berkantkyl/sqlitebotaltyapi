let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

   if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(" Bu komudu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
message.guild.fetchBans().then(bans => {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Ban Listesi!`)
  .setDescription(`Sunucunuzda \`${bans.size ? bans.size : 'veri yok.'}\` Ban Bulunmaktadır! `)
  .setColor(oldu)
  message.channel.send(embed)
})
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-say", "banliste", "ban-liste"],
  permLevel: 0
};

module.exports.help = {
  name: 'bansay'
};
