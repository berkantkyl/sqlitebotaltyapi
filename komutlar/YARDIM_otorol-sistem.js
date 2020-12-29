let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, bot } = require("../ayarlar.json")
let ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
  



  let user = await db.fetch(`otorolu.${message.guild.id}`)
  let bot = await db.fetch(`otorolb.${message.guild.id}`)


    let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
if(args[0] == 'bot') {
  let type = message.mentions.channels.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`
  Selam, Otorol Bot Sistemini Ayarlamak İçin Aşşağıda Verdiğimiz Seçnekleri Kullanın:
  
  \`${prefix}oto-rol-bot @rol\`
  \`${prefix}oto-rol-bot kapat\`
  Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))
  
      if(db.has(`otorolb.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Açık!`).setColor(hata))

  db.set(`otorolb.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Oto rol başarıyla ${type} olarak ayarlandı!`).setColor(oldu))

  
  return
}
  if(args[0] == 'user') {
    let type = message.mentions.channels.first()
      if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`
  Selam, Otorol Kullanıcı Sistemini Ayarlamak İçin Aşşağıda Verdiğimiz Seçnekleri Kullanın:
  
  \`${prefix}oto-rol-user @rol\`
  \`${prefix}oto-rol-user kapat\`
  Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))
    
        if(db.has(`otorolu.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Açık!`).setColor(hata))

  db.set(`otorolu.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Oto rol başarıyla ${type} olarak ayarlandı!`).setColor(oldu))

    return
  }
let embed = new Discord.MessageEmbed()
.setTitle(`${bot} Otorol Menüsü!`)
.setDescription(`
**${prefix}oto-rol user @rol**
\`Kullanıcı Otorolünü Ayarlarsınız\`

**${prefix}oto-rol bot @rol**
\`Bot Otorolünü Ayarlarsınız\`
`)
.setColor(oldu)

message.channel.send(embed)
  return
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["otorol" , "oto-rol"],
  permLevel: 0
};

module.exports.help = {
  name: 'otorol-sistem'
};
