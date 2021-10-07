const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'gay',
    description: "gay command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#1E6793')
        .setTitle('GAY')
        .setURL('')
        .setDescription('')
        .setImage('https://media.istockphoto.com/photos/rainbow-flag-blowing-in-the-wind-picture-id1218010032?b=1&k=20&m=1218010032&s=170667a&w=0&h=0wZi0BeGpInbBGW8gJkyKYtHesV3V6Jsa9GOttGWwn4=')

        message.channel.send(newEmbed)

    }
}