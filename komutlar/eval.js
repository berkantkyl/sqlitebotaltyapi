  
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const tokenuyari = `SyntaxError: Unexpected token`
exports.run = async (client, message, args) => {
  if(message.author.id == "605094063250735115") {
    if(!args[0]) {
   
        const embed = new Discord.MessageEmbed()
            .setDescription(`\`\`\`fix\nUndefined\`\`\``) 
            .setColor("#36393F")
        message.channel.send({embed})
        return
    }
    const code = args.join(' ');
   if (args.includes("client.token")) return message.channel.send(tokenuyari);
    function clean(text) {
        if (typeof text !== 'string')
            text = require('util').inspect(text, { depth: 0 })
        text = text
            .replace(/`/g, '`' + String.fromCharCode(8203))
            .replace(/@/g, '@' + String.fromCharCode(8203))
        return text;
    };

    const evalEmbed = new Discord.MessageEmbed()
    try {
        var evaled = clean(await eval(code));
        if(evaled.startsWith('NTQ3M')) evaled = tokenuyari;
        if (evaled.constructor.name === 'Promise') evalEmbed.setDescription(`\`\`\`\n${evaled}\n\`\`\``)
        else evalEmbed.setDescription(`\`\`\`js\n${evaled}\n\`\`\``)
        const newEmbed = new Discord.MessageEmbed()
            .addField('📥 Giriş', `\`\`\`javascript\n${code}\n\`\`\``)
            .addField('📤 Çıkış', `\`\`\`js\n${evaled}\`\`\``)
            .setColor("#36393F")
        message.channel.send(newEmbed);
    }
    catch (err) {
        evalEmbed.addField('Hata çıktı;', `\`\`\`js\n${err}\n\`\`\``);
        evalEmbed.setColor("#36393F")
        message.channel.send(evalEmbed);
    }
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};


exports.help = {
    name : "eval",
   
}
