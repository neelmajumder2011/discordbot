const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'ping',
    description: "ping command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#1E6793')
        .setTitle('')
        .setURL('')
        .setDescription('**Pong!**')

        message.channel.send(newEmbed)

    }
}