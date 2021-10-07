const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'help',
    description: "help command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('A349D3')
        .setTitle('**Here is some help!**')
        .setURL('')
        .setDescription('**📢 IMPORTANT**\n`faq` `info` `Credits`\n**🎡 FUN COMMANDS**  \n`Joke` `Funfact` `Ping` `Meme` `Kill-me` `Coinflip` `Quotes` `Gay` `Inf`\n**💡 OTHER COMMANDS**\n`Hello` `Prefix`\n**🎱 WEIRD COMMANDS**\n`Dharmann`\n**🔨 MODERATION**\n`kick` `ban` ')
        .setFooter('')
        .setImage('https://cdn.discordapp.com/attachments/879248506936770563/892706525230014484/Discord_Icon_2.jpg')



        message.channel.send(newEmbed)

    }
} 