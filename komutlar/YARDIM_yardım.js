let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, hata1,  bot } = require("../ayarlar.json")
let ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
let user = message.mentions.members.first() || message.author
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

let erkek = await db.fetch(`kayıte.${message.guild.id}`)
  if(args[0] == 'kayıt'){

    let embedkayıt = new Discord.MessageEmbed()
    .setThumbnail(user.avatarURL({ dynamic: true }))
    .setDescription(`
    [**Sqlite Kayıt Sistemi**](https://wump.lol/sqlite)
        
        **Sistemin düzgün Çalışması İçin Lütfen
        @Sqlite Rolünü Üyelerden üste Çekiniz**
        
    ** ${prefix}k-log #kanal**
    \`Kayıtların Yapılacağı Kanallar\` 
    
    **${prefix}k-otoisim & ${prefix}k-otoisim-kapat**
    \`Kullanıcı Katılırsa Otomatik İsmi Değişir. & Otoisim Sistemini Kapatır\` 
        
    **${prefix}k-oto-rol @rol**
    \`Kayıt Otorol Yani Kullanıcı Sunucuya Geldiğinde Oto Rol Verir, opisyonel\` 

 **${prefix}k-alınacak-rol @rol**
    \`Kayıt Alınacak Rol Yani Yetkili Kayıt Ettiğinde Oto Rolü Alır\` 
    
     **${prefix}k-erkek-rol @rol**
    \`Kayıt Erkek Rol Yani Kayıt Ettiğinizde Erkek Rolünü Verir!\` 
        
        **${prefix}k-kadın-rol @rol**
        \`Kayıt Kadın Rol Yani Kayıt Ettiğinizde Kadın Rolünü Verir!\` 
        
        **${prefix}erkek**
        \`Üyeyi Erkek Şeklinde Kayıt Ederim\` 
        
        **${prefix}kadın**
        \`Üyeyi Kadın Şeklinde Kayıt Ederim\` 
                                
        **${prefix}k-y-rol @rol**
    \`Kayıt Yetkilisi Yani Kayıtları Yapabilecek Rol\` 
                
**${prefix}k-isim-zorun <evet/hayır>**
    \`Kayıt İsim Zorun Yani Kullanıcıyı Kayıt Ederken İsim Yaş Girmek Zorunlu Olacak\` 
        
        **${prefix}k-isim-düzen {isim} - {yas}**
    \`Kayıt İsim Düzenini Ayarlarsınız\` 
        
    **${prefix}k-destek <evet/hayır>**
    \`Kayıt Destek Yani Sunucuya Biri Geldiğinde Kayıt Yetkilisini Etiketler & Etiketlemez\` 
                    
                    **${prefix}k-mesaj**
    \`Ultra Mega Süper Kayıt Mesajını Ayarlarsınız!\`
    
    **${prefix}k-ek-rol @rol & ${prefix}k-ek-rol kapat & opisyonel**
    \`Kayıt Edilirken Erkek Ve Kadına Verilecek Ekstra Rol\`
        `)
    
    .setColor(oldu)
     message.channel.send(embedkayıt)
    
    return
  }
  

    if(args[0] == 'moderasyon'|| args[0] == 'yetkili'){
    let embedyetkili = new Discord.MessageEmbed()
        .setThumbnail(user.avatarURL({ dynamic: true }))

    .setTitle(`${bot} Moderasyon Menüsü!`)
    .setDescription(`        
    **${prefix}ban-sistem**
    \`Ban Sistemini Görüntüleyebilirsin\` 
    
    **${prefix}otorol-sistem**
    \`Otorol Sistemini Görüntüleyebilirsin\` 
    
    **${prefix}görsel-engel #kanal **
    \`Görsel Engel Sistemi Yani Kullanıcılar Görsele Mesaj Yazamıyacak\` 
 
     **${prefix}anti-raid-sistem**
    \`Anti Raid Yani Bot Koruma\` 
    
    **${prefix}güvenlik-sistem**
    \`Efsane Güvenli / Güvensiz Sistemini Ayarlarsınız.\` 

**${prefix}yavaş-mod**
    \`Yavaş Modu Ayarlayabilirsiniz.\` 
    
    **${prefix}nuke**
    \`Bulunduğunuz Kanalları Patlatır\` 
    `)
    
    .setColor(oldu)
    
     message.channel.send(embedyetkili)
    
    return
    }


  
  

    
        if(args[0] == 'kullanıcı'){
           let embedyetkili = new Discord.MessageEmbed()
        .setThumbnail(user.avatarURL({ dynamic: true }))

    .setTitle(`${bot} Kullanıcı Menüsü!`)
    .setDescription(`
    **${prefix}kb**
    \`Bilgilerinizi Görüntüleyebilirsiniz.\` 
            
`)
    
    .setColor(oldu)
    
     message.channel.send(embedyetkili)
    
    return
        }

        if(args[0] == 'bot'){
    let embedyetkili = new Discord.MessageEmbed()
        .setThumbnail(user.avatarURL({ dynamic: true }))

    .setTitle(`${bot} Bot Menüsü!`)
    .setDescription(`
    **${prefix}prefix**
    \`Botun Prefix'ini Ayarlarsınız.\` 
    
     **${prefix}komutlar**
    \`Botun Komutlarını Görebilirsiniz.\`
    
     **${prefix}davet**
    \`Botu Sunucunuza Davet Edebilirsiniz.\` 
    
**${prefix}bilgi**
    \`Botun İstatistiğini Görebilirsiniz.\`
    
    **${prefix}gold**
    \`Gold Sistemini Görüntüleyebilirsiniz.\` 
    
    **${prefix}yorum-yap**
        \`Bota Yorum Yaparsınız!\` 
            
`)
    
    .setColor(oldu)
    
     message.channel.send(embedyetkili)
    
    return
    }
  
  
  let embed = new Discord.MessageEmbed()

  .setTitle(`${bot} Yardım Menüsü!`)
  .setThumbnail(user.avatarURL({size: 4096, dynamic: true, format: 'png'}))
    .setDescription(`
    [**Sqlite Kayıt Botu**](https://wump.lol/sqlite)

    `)
  .addField(`**__${client.emojis.cache.get('793067766336323675')} Kayıt Komutları__**`, `
        \`${prefix}yardım kayıt\` `, true)
          .addField(` **__${client.emojis.cache.get('788060718804500511')} Moderasyon Komutları__**`, `
                \`${prefix}yardım moderasyon\`  `, true)
  .addField('** **', '** **', true)
                  .addField(`**__${client.emojis.cache.get('793066973298032640')} Bot Komutları__**
`, `        \`${prefix}yardım bot\` `, true)
                    .addField(`**__${client.emojis.cache.get('793065093914820689')} Kullanıcı Komutları__**
`, `        \`${prefix}yardım kullanıcı\` `, true)
  .addField('** **', '** **', true)
                      .addField(`**__${client.emojis.cache.get('780415826158682113')} Kayıt Kontrolleri__**
`, `        \`${prefix}kontrol kayıt\` `, true)
.addField(`** **`, `
\`\`\`👮🏼‍♂️ ${prefix}yorum-yap | Eğer Bir Sorun İle Karşılaşırsanız Kullanın!\`\`\`
\`\`\`🤖 ${prefix}davet | ${bot}U Sunucunuza Ekleyip Güzelce Kullanın!\`\`\` `)
  .addField(`Linkler`, `[**__Botu Davet Et__**](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=805314622) | [**__Bota Oyver__**](https://top.gg/bot/${client.user.id}) | [**__Botun Destek Sunucusu__**](https://discord.gg/XQ9FwQaat3)`)
        
        
                         
    
    
    .setColor(oldu)
  
message.channel.send(embed)
  return
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y" , "help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım'
};
