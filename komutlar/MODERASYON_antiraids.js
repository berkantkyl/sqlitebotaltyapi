
const Discord = require('discord.js')
const db = require('quick.db')
let  ayarlard = require("../ayarlar.json")

exports.run = async (client, message, args) => { 
  let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` ${ayarlar.hata2} | Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.`);
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor(ayarlar.hata).setDescription(`
Selam, Bir Seçenek Belirtmen Gerekmekte Örnekler Aşşağıda Bulunmaktadır!

\`${prefix}anti-raid aç\`
\`${prefix}anti-raid kapat\`

Bu Seçenekleri Kullanabilirsiniz.`))
  
  if(args[0] == 'aç') {
        if(db.has(`antiraidcam.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(ayarlar.hata).setDescription(`${ayarlar.hata2} | Sistem Zaten Açık!`))
db.set(`antiraidcam.${message.guild.id}`, 'açık')
        message.channel.send(new Discord.MessageEmbed().setColor(ayarlar.oldu).setDescription(`${ayarlar.oldu2} | Anti Raid Sistemi Başarıyla Açıldı!`))

    return
  }
  if(args[0] == 'kapat') {
    if(!db.has(`antiraidcam.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(ayarlar.hata).setDescription(`${ayarlar.hata2} | Sistem Zaten Kapalı`))
    db.delete(`antiraidcam.${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setColor(ayarlar.oldu).setDescription(`${ayarlar.oldu2} | Anti Raid Sistemi Başarıyla Kapatıldı!`))
    return
  }
}
 

 exports.conf = {
	enabled:true,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'anti-raid', 
	description: '',
	usage: ''
}