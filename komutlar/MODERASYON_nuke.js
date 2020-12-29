const Discord = require("discord.js");
const open = require('../ayarlar.json');
exports.run = async (client, message, args) => {

let channel4 = message.channel

channel4.clone({ name :channel4.name}).then(async klon => {

  await  klon.setPosition(channel4.position);
  if(channel4.topic) {
   klon.setTopic(channel4.topic)
  }
  if(channel4.rateLimitPerUser) {
   klon.setRateLimitPerUser(channel4.rateLimitPerUser)
  }
  await klon.setNSFW(klon.nsfw)
  await channel4.delete()
  const em = new Discord.MessageEmbed().setDescription('3. Dünya savaşından kalan Atom Bombası Patlatıldı :sunglasses:').setImage('https://cdn.glitch.com/b819e63f-ac6a-40a2-8616-c62ef5027fbe%2Ftenor.gif?v=1603465620438').setColor('#ff7d00')


klon.send(em)
})
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
}

exports.help = {
    name : "nuke",
    description : "Bulunduğunuz kanalı patlatır!"
}