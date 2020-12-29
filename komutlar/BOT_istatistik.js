let Discord = require("discord.js");
let db = require("quick.db")
let os = require("os")
let moment = require("moment")
let { oldu, hata, bot, prefix, sahip} = require("../ayarlar.json")
module.exports.run = async (client, message, size) => {
  let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
  let günler = {
  "01" : "1",
  "02" : "2",
  "03" : "3",
  "04" : "4",
  "05" : "5",
  "06" : "6",
  "07" : "7",
  "08" : "8",
  "09" : "9",
  "00" : "0",
  
}
let aylar = aylartoplam;
   let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)


const reducer3 = (a,b)=> a + b.roles.cache.size;

let embed = new Discord.MessageEmbed()
.setTitle(`${bot} İstatistik`)
.addField(` \`Bot Bilgileri:\` `, `
<a:settings:780415826158682133> Sunucu Sayısı: \`${client.guilds.cache.size}\`
<a:settings:780415826158682133> Kanal Sayısı: \`${client.channels.cache.size}\`
<a:settings:780415826158682133> Kullanıcı Sayısı: \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`
<a:settings:780415826158682133> Rol Sayısı: \`${client.guilds.cache.reduce(reducer3,0)}\`
<a:settings:780415826158682133> Komut Sayısı: \`${client.commands.size}\`
<a:settings:780415826158682133> Kurucular: <@!${sahip}>
`, true)


.addField(`\`Versiyon Bilgileri:\` `, `
<a:settings:780415826158682133> Node.js: \`${process.version}\`
<a:settings:780415826158682133> Discord.js: \`${Discord.version}\`
<a:settings:780415826158682133> Quick.db: \`${db.version}\`
<a:settings:780415826158682133> Moment: \`${moment.version}\``, true)
.addField(`\`Donanım Bilgileri:\``, `
<a:settings:780415826158682133> İşletim Sistemi: \`${os.platform}\`
<a:settings:780415826158682133> Cpu: \`${os.cpus().map(i => `${i.model}`)[0]}\`
`)

.addField(`\`Ekstra Bilgiler:\``, `
<a:settings:780415826158682133> Ram Kullanımı: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb\`
<a:settings:780415826158682133> Toplam Ram: \`${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)}mb\`
<a:settings:780415826158682133> Bit: \`${os.arch()}\`
<a:settings:780415826158682133> Ping: \`${client.ws.ping}\`
<a:settings:780415826158682133> Kuruluş: \`${s}\`
<a:settings:780415826158682133> VDS Sponsoru: \`ɱႦ Monster#1881\`
`)


.setColor(oldu)

message.channel.send(embed)
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-bilgi" , "istatistik"],
  permLevel: 0
};

module.exports.help = {
  name: 'bilgi'
};
