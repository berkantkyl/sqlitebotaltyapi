
const Discord = require('discord.js')
const db = require('quick.db')
let  ayarlard = require("../ayarlar.json")

exports.run = async (client, message, args) => { 
  let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` ${ayarlar.hata2} | Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.`);


let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send({embed: {color: ayarlar.hata, description: `
Selam, Bir Kanal Etiketlemen Gerekmekte Örnekleri Aşşağıda Verdim!

\`${prefix}anti-raid-kanal #kanal\`
\`${prefix}anti-raid-kanal kapat\`
Bu Seçenekleri Kullanıp Anti Raid Sistemini \`<açıp/kapatırsınız>\``}})
if(kanal) {
      if(db.has(`antiraid_${message.guild.id}`)) return
db.set(`antiraid_${message.guild.id}`, kanal.id)
const embed = new Discord.MessageEmbed()
embed.setDescription(`${ayarlar.oldu2} | Anti Raid Aktif Edildi! \n Log Kanalı İse <#${kanal.id}> Olarak Ayarlandı.`)
  embed.setColor("GOLD")
 return message.channel.send(embed)
}
  
  if(args[0] === "kapat") {
    if(!db.has(`antiraid_${message.guild.id}`)) return
    db.delete(`antiraid_${message.guild.id}`)
const embed = new Discord.MessageEmbed()
embed.setDescription(`${ayarlar.oldu2} | Anti Raid Deaktif Edildi!`)
    embed.setColor("RED")
     return message.channel.send(embed)
  }
  
}
 

 exports.conf = {
	enabled:true,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'anti-raid-kanal', 
	description: '',
	usage: ''
}