let Discord = require("discord.js");
let db = require("quick.db")
const timeout = 86400000 
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

        
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`Bana **Ban Yetkisi** Rolünü Ver!`))
  let banlog = await db.fetch(`logban.${message.guild.id}`)
  let bany = await db.fetch(`bando.${message.guild.id}`)
  let limit = await db.fetch(`banlimit.${message.guild.id}`)
  
  if(!banlog) return message.channel.send(new Discord.MessageEmbed().setDescription(`Banlog Ayarlanmamış! : ${prefix}ban-log #kanal`).setColor(hata))
    if(!bany) return message.channel.send(new Discord.MessageEmbed().setDescription(`Ban Yetkili Rol Ayarlanmamış! : ${prefix}ban-y-rol @rol`).setColor(hata))

  
  if(!message.member.roles.cache.has(bany)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`Bu Komutu Kullanabilmek İçin <@&${bany}> Yetkisine Sahip Olman Gerekmekte! `))
  




        
      
  
  
  let user = message.mentions.members.first()
  let sebep = args.slice(1).join(' ')
  if(!user) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir Üye Etiketlemen Gerektiğini Unuttunmu Yoksa!`).setColor(hata))
if(!sebep) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir Sebep Belirtmen Gerektiğini Unuttunmu!`).setColor(hata))
  
  if(!message.guild.member(user).bannable) return message.channel.send(new Discord.MessageEmbed().setDescription(`Yetkilileri Banlayamam Bunu Unuttunmu! Beni En Üste Alki Onu Banlayayım!`).setColor(hata))
  
  

  message.guild.member(user).ban({reason: sebep})
message.author.send(new Discord.MessageEmbed().setDescription(`Kullanıcı Başarıyla Banlandı!`).setColor(oldu))
  
  
  let embed = new Discord.MessageEmbed()
  .addField('İşlem:', 'Ban')
  .addField('Banlanan Kullanıcı', `${user}`)
  .addField('Banlayan Yetkili:', `<@!${message.author.id}>`)
  .addField('Sebep', `${sebep}`)
  .setColor(oldu)
  message.guild.channels.cache.get(banlog).send(embed)
  

  }  


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban"],
  permLevel: 0
};

module.exports.help = {
  name: 'yasakla'
};
