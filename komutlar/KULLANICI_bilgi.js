const Discord = require("discord.js");
let db = require("quick.db")
const moment = require('moment')
require('moment-duration-format')
exports.run = async(client, message, args) => {

  let usere = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
  let user = message.guild.member(usere)
 let userK = moment(user.user.createdAt).format(" YYYY / MM / DD - HH:mm:ss")
 let userJ = moment(user.joinedAt).format(" YYYY / MM / DD - HH:mm:ss")
 const created = new Date().getTime() - user.user.createdAt.getTime();
 const userCe = moment.duration(created).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
 const joined = new Date().getTime() - user.joinedAt.getTime();
 const userJo = moment.duration(joined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")

 let ozeldurum = user.presence.activities[0] || 'Özel durumu yok'
 const Durum = user.presence.status;
 const durum = (Durum == "online" ? ("🟢 Çevrimiçi") : (Durum == "offline" ? ("❔ Çevrimdışı") : (Durum == "idle" ? ("🟡 Boşta") : (Durum == "dnd" ? ("🔴 Rahatsız Etmeyin") : ("bulunamadı.")))))
let premiummu = await db.fetch(`premium.${message.guild.id}`)

//--------------------------------
const embed2 = new Discord.MessageEmbed()
.setAuthor(user.user.username+' Kişinin Katılım Bilgileri',user.user.avatarURL({dynamic : true, format : "png"}))
.setThumbnail(user.user.avatarURL({dynamic : true, format : "png"}))
.addField('Takma Ad:',user.toString(),true)
.addField('Hesabın Bulunduğu zaman:',userCe,true)
.addField('Hesabın Sunucuya Katılımı:',userJo,)
.addField('Hesabın Kuruluş Tarihi:',userK,)
.addField('Hesabın Sunucuya Giriş Tarihi:',userJ,)
.setColor(message.member.roles.highest.color)
.setFooter(`${message.author.username} tarafından İstendi`,message.author.avatarURL({format : "png", dynamic : true}))
const embed = new Discord.MessageEmbed().setColor(message.member.roles.highest.color)
.setAuthor(user.user.username+' Kişinin Kullanıcı Bilgileri',user.user.avatarURL({dynamic : true, format : "png"}))
.setThumbnail(user.user.avatarURL({dynamic : true, format : "png"}))
.addField('Takma Ad:',user.toString(),true)
.addField('Çevrimiçi Durumu:',durum,true)
.addField('Kimlik', user.id,true)
.addField('Özel Durumu:',ozeldurum.state || "Özel Durum Yok")
.addField('Son mesajı:',user.lastMessage.content,true)
.addField('Son Mesaj Linki:',`[Son Mesaj](${user.lastMessage.url})`,true)
.addField("Oynadığı Oyun:", `${user.presence.game ? user.presence.game.name : 'Oynadığı Bir Oyun Yok'}`)
.addField('Kullanıcı Premium Üyemi:',premiummu ? 'Evet' : 'Hayır',true)
.addField(`Roller [${user.roles.cache.filter(a => a.name !== '@everyone').size}]`,user.roles.cache.filter(a => a.name !== "@everyone").map(a => `${a}`).join(" ") || "Rolü Yok")
.setFooter(`${message.author.username} tarafından İstendi`,message.author.avatarURL({format : "png", dynamic : true}))


message.channel.send(embed).then(async m => {
  m.react('◀️').then(r =>{ 

const tamam = (reaction,user) => reaction.emoji.name == '◀️' && user.id == message.author.id;
  const tamam2 = m.createReactionCollector(tamam)
tamam2.on('collect', async (r)=>{
  m.reactions.resolve("◀️").users.remove(message.author);
 
m.edit(embed)
  
   })
})
await m.react('📅').then(r =>{ 

const tamam = (reaction,user) => reaction.emoji.name == '📅' && user.id == message.author.id;
  const tamam2 = m.createReactionCollector(tamam)

tamam2.on('collect', async (r)=>{

  
m.reactions.resolve("📅").users.remove(message.author);
  m.edit(embed2)
  })
})
})
};

exports.conf = {
	enabled:true,
	guildOnly: false,
	aliases: ['kb'],
	permLevel: 3
}

exports.help = {
    name : "kullanıcıbilgi"   
}
