const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'joke',
    description: "joke command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#1E6793')
        .setTitle('Joke? alr')
        .setURL('')
        .setDescription('Here is a joke! And... THE... Joke is...\n\n\n\n\n ***YOU***')

        message.channel.send(newEmbed)

    }
}