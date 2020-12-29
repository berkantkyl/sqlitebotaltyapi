let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, bot, prefix } = require("../ayarlar.json")
let ayarlar = require("../ayarlar.json")
const DBL = require("dblapi.js");

module.exports.run = async (client, message, args) => {
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2ODEyMDUwMTA1NDM0MTE2MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA3NTk0NTQ1fQ.C4XNH-jWKnIq0VCLoeMx6QHl4XoXpWuB-2om6MW67gw', client);
 dbl.hasVoted(message.author.id).then(async voted => {
  if (!voted) { message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) )
   } else {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Dostum Geçerli Yetkin Yok.`).setColor(hata))
  
    let prefix1 = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Prefix Ayarlamak İçin : ${prefix1}prefix ayarla <prefix> Kapatmak İçin İse : ${prefix1}prefix sıfırla`).setColor(hata))
  
  
let prefix = args[1]
  if(args[0] == 'ayarla') {
if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("#ffd100")
.setDescription(`** ${ayarlar.hata2} | Bir Prefix Girip Tekrar Dene |  Şuanki Prefix:** ${prefix1}`));
    if(db.has(`prefix.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.hata2} | Prefix Zaten Ayarlanmış`))
    db.set(`prefix.${message.guild.id}`, prefix)
message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.oldu2} | Prefix Başarıyla ${prefix} Olarak Ayarlandı`))  
    return
  }
  if(args[0] == 'sıfırla') {
    if(!db.has(`prefix.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.hata2} | Prefix Zaten Ayarlanmamış!`))
    db.delete(`prefix.${message.guild.id}`)
message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.oldu2} | Prefix Başarıyla Sıfırlandı!`))
    return
  }
    
  
  
}})};



module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'prefix'
};
