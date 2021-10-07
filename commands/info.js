const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'info',
    description: "info command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#3E3A38')
        .setTitle('Bot Info!')
        .setURL('')
        .setDescription('Bot Name - Lights Bot. \n\n Bot prefix - "**>**" \n\n Code language - Java Script \n\n Made on - Visual Studio Code \n\n Made by - The Light#5002 \n\n Verified level - FALSE \n\n  ')
        .setFooter('Info')
        .setImage('https://cdn.discordapp.com/attachments/879248506936770563/894944476911525998/Lights_Bot.jpg')
        message.channel.send(newEmbed)

    }
}