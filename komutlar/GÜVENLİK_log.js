let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu, bot } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
  
  
  if(!args[0]) return message.channel.send({embed: {color: hata, description: `
  Selam, Güvenlik Log İçin Bir Seçenek Belirtmen Gerek Seçenekleri Aşşağıda Belirttim:
  \`${prefix}güvenlik-log #kanal\`
  \`${prefix}güvenlik-log kapat\`
  Bu Seçenekleri Kullanabilirsiniz.`}})
    
  
  
  if(args[0] == 'kapat'){
    if(!db.has(`logg.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Tehlikeli / Tehlikesiz Log Zaten Kapalı!`).setColor(hata))
    db.delete(`logg.${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Tehlikeli / Tehlikesiz logu başarıyla kapatıldı!`).setColor(oldu))
    return
  }
  let type = message.mentions.channels.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bir kanal etiketlemelisin!`).setColor(hata))
  
   if(db.has(`logg.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Tehlikeli / Tehlikesiz Log Zaten Açık!`).setColor(hata))
  db.set(`logg.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Tehlikeli / Tehlikesiz logu başarıyla ${type} olarak ayarlandı!`).setColor(oldu))
  return
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["g-log", "güvenliklog"],
  permLevel: 0
};

module.exports.help = {
  name: 'güvenlik-log'
};
