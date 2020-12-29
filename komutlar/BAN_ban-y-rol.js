let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
  
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
  Selam, Ban Yetkilisini Ayarlamak İçin Aşşağıda Verdiğimiz Seçenekleri Girmen Gerekiyor:
  
  \`${prefix}ban-yetkili-rol @rol\`
  \`${prefix}ban-yetkili-rol kapat\`
  Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))
  
    
  
  
  if(args[0] == 'kapat'){
    
    
       if(!db.has(`bando.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Ban Yetkili Rolü Zaten Kapalı!`).setColor(hata))

    db.delete(`bando.${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Ban Yetkili rolü başarıyla kapatıldı!`).setColor(oldu))
    return
  }
  
  let type = message.mentions.roles.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bir rol etiketlemelisin!`).setColor(hata))
  
   if(db.has(`bando.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Ban Yetkili Rolü Zaten Açık!`).setColor(hata))
  db.set(`bando.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Ban Yetkili rolü başarıyla ${type} olarak ayarlandı!`).setColor(oldu))
  return
  
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-y-rol", "banyetkilirol"],
  permLevel: 0
};

module.exports.help = {
  name: 'ban-yetkili-rol'
};
