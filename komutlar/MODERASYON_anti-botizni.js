   const db = require('quick.db')
   const db2 = require('discord.js')
let Discord = require("discord.js")
let { oldu, hata } = require("../ayarlar.json")
exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` ${ayarlar.hata2} | Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.`);
   let _bot_role_ = await db.fetch(`antiraid_${message.guild.id}`) 
  
let arguman = args[0];
  
if (!arguman) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Selam Bir Seçenek Belirtmen Gerekmektedir, Bu Seçenekler Aşşağıda Gösterilir :

\`${prefix}botizni botunid\`
\`${prefix}botizni iptal\`
Bu Seçeneği Kullanabilirsiniz.
`).setColor(hata))

if (arguman === "iptal") {
 db.delete(`botizin_${args[1]}`) 
  message.channel.send(new Discord.MessageEmbed().setDescription(` ${ayarlar.oldu2} | \`${args[1]}\` ID Sine Saip Olan Botu Giriş İzni Kaldırıldı`).setColor(oldu))
       } else {    
db.set(`botizin_${arguman}`, "İzinli")
         db.add(`botizinci_${arguman}`, 1)

message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | \`${arguman}\` ID Sine Sahip Olan Bot Artık Sunucuya Eklenebilir`).setColor(oldu))
         
   
	
  		
  
       }
}
exports.conf = {
	enabled:true,
	guildOnly: false,
	aliases: [],
	permLevel: 3,
}

exports.help = {
	name: 'botizni', 
	description: '',
	usage: ''
}