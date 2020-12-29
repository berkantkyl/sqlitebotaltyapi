let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, bot, prefix } = require("../ayarlar.json")
module.exports.run = async (client, message, size) => {



let embed = new Discord.MessageEmbed()
.setTitle(`${bot} Davet Menüsü`)
.setDescription(`
[Botu Sunucuna Davet Et](https://discord.com/oauth2/authorize?client_id=768120501054341160&scope=bot&permissions=8)
[Bota Oyver](https://top.gg/bot/768120501054341160/vote)
[Botun Destek Sunucusu](https://discord.gg/sqlitebotdestek)
`)
.setColor(oldu)
message.channel.send(embed)
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet-et" , "davetet", "site", "invite"],
  permLevel: 0
};

module.exports.help = {
  name: 'davet'
};
