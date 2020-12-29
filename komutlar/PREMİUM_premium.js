let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, bot } = require("../ayarlar.json")
let ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
  






    let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

let embed = new Discord.MessageEmbed()
.setTitle(`${bot} Premium Satın Alma İşlemleri.`)
.setDescription(`
${bot} Premium!

<a:settings:780415826158682133> Premim Sistemi
**10TL
Sa / Selam vb. Yazdığınızda **Hizaya Geçin. Bir Gold Üye Belirdi** Mesajı Alırsınız

Dahada Fazla Özellik ** YAKINDA ** 

<a:settings:780415826158682133> Siz İlk Deneyin Diye %95'e Kadar İndirim**
`)
.setColor(oldu)

message.channel.send(embed)
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold-sistem" , "goldsistem"],
  permLevel: 0
};

module.exports.help = {
  name: 'gold'
};
