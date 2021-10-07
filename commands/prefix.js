const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'prefix',
    description: "prefix command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('')
        .setURL('')
        .setDescription('Our prefix for this server is `>`.')

        message.channel.send(newEmbed)

    }
}