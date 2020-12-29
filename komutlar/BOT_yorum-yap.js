let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, bot, prefix } = require("../ayarlar.json")
let ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
let yazı = args.slice(0).join(' ')

let kişi = message.mentions.members.first() || message.author
if(!yazı) return message.channel.send(new Discord.MessageEmbed().setColor(ayarlar.hata).setDescription(`
Selam, Botumuza Yorum Yapmak İçin Bir Yorum Belirtmen Gerekmekte Aşşağıda Örnekleri Verdim:
\`${prefix}yorum-yap <yorum>\`
Bu Seçenekleri Kullanabilirsiniz.`))
  message.author.send("Botumuza Yorum Yaptığın İçin Teşekkürler.")
  
  let kanal = client.channels.cache.get('788388515796746240')
  
  
  kanal.send(new Discord.MessageEmbed().setColor(ayarlar.oldu).setThumbnail(kişi.avatarURL({ dynamic: true})).setDescription(`
  **Bir Yorum Geldi!**
  
  Yorumu Yapan Sunucu: ${message.guild.name} ${message.guild.id}
  
  Yorumu Yapan Kullanıcı: ${message.author.username} ${message.author.id}
  
  Yorum: ${yazı}
  
  [Mesaj Linki](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})
`))
  
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yorumyap'],
  permLevel: 0
};

module.exports.help = {
  name: 'yorum-yap'
};
