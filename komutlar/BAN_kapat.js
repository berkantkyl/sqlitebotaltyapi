let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.hata2} | Bana **Ban Yetkisi** Rolünü Ver!`))
 db.delete(`logban.${message.guild.id}`)
db.delete(`bany.${message.guild.id}`)
  db.delete(`banlimit.${message.guild.id}`)
message.channel.send(`${ayarlar.oldu2} | Ban Sistemi Kapatıldı!`)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-sistem-kapat"],
  permLevel: 0
};

module.exports.help = {
  name: 'ban-s-kapat'
};
