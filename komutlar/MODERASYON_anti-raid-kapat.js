
const Discord = require('discord.js')
const db = require('quick.db')
let ayarlard = require("../ayarlar.json")

exports.run = async (client, message, args) => { 
  let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` ${ayarlar.hata2} | Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.`);



    if(!db.has(`antiraid_${message.guild.id}`)) return
    db.delete(`antiraid_${message.guild.id}`)
const embed = new Discord.MessageEmbed()
embed.setDescription(`${ayarlar.oldu2} | Anti Raid Deaktif Edildi!`)
    embed.setColor("RED")
     return message.channel.send(embed)
  
  
}
 

 exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'anti-raid-kapat', 
	description: '',
	usage: ''
}