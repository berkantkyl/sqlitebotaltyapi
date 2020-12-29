let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

        
   if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(" Bu komudu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
    let kullanici = args[0];
    if (!kullanici) return message.channel.send("Banlanan Bir kullanıcının ID'sini belirtmen gerek")
  if(isNaN(kullanici)) return message.channel.send("Bir Harf Girdin Sayı Değil!")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`Bu kullanıcı banlanmamış.`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {
        var sebep;
        if (reason === null) sebep = "Neden belirtilmemiş"
const Embed = new Discord.MessageEmbed()
 .setColor('#FFD100')
.setAuthor('Ban Sorgulama')
.setDescription(`${user.tag} adlı kullanıcının ban nedeni: \n\n\`${reason ? reason : 'veri yok.'}\` `)
message.channel.send(Embed)
    })

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-sorgu", "bansorgu"],
  permLevel: 0
};

module.exports.help = {
  name: 'bansorgu'
};
