let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, bot, prefix } = require("../ayarlar.json")
let ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args, size) => {
         let dcm = await db.fetch(`botizinci_${message.guild.id}`)

  let d = await db.fetch(`antiraidcam.${message.guild.id}`)
        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

 let embed = new Discord.MessageEmbed()
.setTitle(`${bot} Anti Raid Menüsü!`)
.setDescription(`
**${prefix}anti-raid-kanal #kanal, ${prefix}anti-raid-kapat**
\`Anti Raid Log Kanalı Ayarlarsınız., Anti Raid Log Sistemini Kapatırsınız. opisyonel\`

**${prefix}botizni <botunid>**
\`Sunucuya Girebilen Botları Ayarlarsınız\`

**${prefix}anti-raid <aç/kapat>**
\`Anti Raidi Açarsınız Veya Kapatırsınız\` 

`)
.setColor(oldu)

message.channel.send(embed)
  
  
  
}



module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["anti-raid-sistem" , "antiraidsistem"],
  permLevel: 0
};

module.exports.help = {
  name: 'anti-raidsistem'
};
