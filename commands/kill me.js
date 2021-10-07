const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'kill-me',
    description: "kill-command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#1E6793')
        .setTitle('Alr...')
        .setURL('')
        .setDescription('Alrighty You Are Dead...')
        .setImage('https://i.imgflip.com/42h5of.jpg')

    

        message.channel.send(newEmbed)

        

    }
}