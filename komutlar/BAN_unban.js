let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
  
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`Bana **Ban Yetkisi** Rolünü Ver!`))
  let banlog = await db.fetch(`logban.${message.guild.id}`)
  let bany = await db.fetch(`bany.${message.guild.id}`)
  
  
  if(!banlog) return message.channel.send(new Discord.MessageEmbed().setDescription(`Banlog Ayarlanmamış! : ${prefix}ban-log #kanal`).setColor(hata))
    if(!bany) return message.channel.send(new Discord.MessageEmbed().setDescription(`Ban Yetkili Rol Ayarlanmamış! : ${prefix}ban-y-rol @rol`).setColor(hata))

  
  if(!message.member.roles.cache.has(bany)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`Bu Komutu Kullanabilmek İçin <@&${bany}> Yetkisine Sahip Olman Gerekmekte! `))
  
  
let user = args[0]
let sebep = args.slice(1).join(' ')

if(!user || !sebep) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir Kullanıcı İD Ve Sebep Girermisin!`).setColor(hata))
  if(isNaN(user)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir İD Gir Dedim! Harf Değil Yanlızca Sebepte Harf Kullanmalısın!`).setColor(hata))
  
  
  message.guild.fetchBans().then(bans => {
    if(bans.size == '0') return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu Sunucuda Kimse Yasaklanmamış Dostum!`).setColor(hata))
    
    let banlanan = bans.find(b => b.user.id == user)
    if(!banlanan) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu Kullanıcı Sunucuda Yasaklanmamış!`).setColor(hata))
    
    
      message.guild.members.unban(banlanan.user)
      let embed = new Discord.MessageEmbed()
  .addField('İşlem:', 'Unban')
  .addField('Banı Geri Çekilen Kullanıcı', `${user}`)
  .addField('Banı Geri Çeken Yetkili:', `<@!${message.author.id}>`)
  .addField('Sebep', `${sebep}`)
  .setColor(oldu)
  message.guild.channels.cache.get(banlog).send(embed)
  })
  

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unban"],
  permLevel: 0
};

module.exports.help = {
  name: 'yasaklama'
};
