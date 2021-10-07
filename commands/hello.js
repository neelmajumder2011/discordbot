const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'hello',
    description: "hello command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#1E6793')
        .setTitle('Hello!')
        .setURL('')
        .setDescription('Hello! Nice to meet you!')

        message.channel.send(newEmbed)

    }
}