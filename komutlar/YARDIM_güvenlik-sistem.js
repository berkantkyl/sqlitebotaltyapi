let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, bot } = require("../ayarlar.json")
let ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args, size) => {



  let d = await db.fetch(`antiraidayar.${message.guild.id}`)
    let d2 = await db.fetch(`botizin_${args[0]}`)
        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix







    let embed = new Discord.MessageEmbed()
.setTitle(`${bot} Güvenlik Menüsü!`)
.setDescription(`
**${prefix}g-güvenli-rol, ${prefix}g-tehlikeli-rol @rol**
\`Kullanıcı 7 Günün Altında Geldiyse Belirttiğiniz Rolü Verir, Kullanıcı 7 Günün Altında Değilse Belirttiğiniz Rolü Verir\`

**${prefix}g-log #kanal**
\`Zorunlu Olmayan Güvenli / Güvensiz Logu Ayarlarsınız.\` 

`)
.setColor(oldu)

message.channel.send(embed)
    


}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["güvenliksistem" , "güvenlik"],
  permLevel: 0
};

module.exports.help = {
  name: 'güvenlik-sistem'
};
