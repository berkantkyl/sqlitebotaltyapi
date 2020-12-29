let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, bot, prefix } = require("../ayarlar.json")
let ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {

    let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

    
let embed = new Discord.MessageEmbed()
.setTitle(`${bot} Ban Menüsü!`)
.setDescription(`
 **${prefix}ban-log #kanal**
\`Banlog Sistemini Ayarlarsın\` 

**${prefix}ban-y-rol @rol**
\`Ban Yetkili Rolünü Ayarlarsın\` 

**${prefix}ban-liste**
\`Banlanan Kişileri Sayabilirsiniz\`

**${prefix}ban-sorgu <id>**
\`Kişinin Ban Nedenini Görebilirsin\`

**${prefix}ban @etiket sebep**
\`Belirtilen Kullanıcıya Ban Atarsın\`

**${prefix}unban <id> sebep**
\`Belirtilen Kullanıcının Banını Geri Çeker\`

**${prefix}ban-sistem kapat**
\`Ban Sistemini Kapatırım\`

`)
.setColor(oldu)

message.channel.send(embed)
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-sistemi" , "bansistem"],
  permLevel: 0
};

module.exports.help = {
  name: 'ban-sistem'
};
