const Discord = require('discord.js');
const db = require('quick.db')
let  ayarlard = require("../ayarlar.json")
exports.run = async (client, message, args) => {

  let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${ayarlar.hata2} | Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.`);
if(!args[0]) return message.channel.send({embed: {color: ayarlar.hata, description: `
Selam, Bir Seçenek Belirtmen Gerekmekte Örnekler Aşşağıda Bulunmaktadır

\`${prefix}görsel-engel #kanal\`
\`${prefix}görsel-engel kapat\`

Siz Bu Seçenekleri Kullanıp Görsel Engel Sistemini <açıp/kapatırsınız>
`}})
  
  if(args[0] == 'kapat') {
    
    if(!db.has(`görselengel.${message.guild.id}`)) return message.channel.send({embed: {color: ayarlar.hata, description: `${ayarlar.hata2} | Görsel Engel Sistemi Zaten Kapalı! `}})
    db.delete(`görselengel.${message.guild.id}`)
    
    message.channel.send({embed: {color: ayarlar.oldu, description: `${ayarlar.oldu2} | Görsel Engel Sistemi Kapandı!`}})
    return
  }
  
    let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send({embed: {color: ayarlar.hata, description: `${ayarlar.hata2} | Bir Kanal Etiketlemelisin Örnek : ${prefix}görsel-engel aç #kanal, veya : ${prefix}görsel-engel kapat `}})
  
    if(db.has(`görselengel.${message.guild.id}`)) return message.channel.send({embed: {color: ayarlar.hata, description: `${ayarlar.hata2} | Görsel Engel Sistemi Zaten Açık!`}})
    db.set(`görselengel.${message.guild.id}`, kanal.id)
    message.channel.send({embed: {color: ayarlar.oldu, description: `${ayarlar.oldu2} | Artık ${kanal}'da Mesaj Atılmasına İzin Vermeyeceğim **Sadece Gif Veya Photo** `}})
    
    return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
}
exports.help = {
  name: "görsel-engel"
}