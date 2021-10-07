const links = ["You flipped the coin! You got **Heads!**","You flipped the coin! You got **Tails!**"]
const { DiscordAPIError } = require("discord.js")


module.exports= {
    name: 'coinflip',
    description: "coimflip command",
    execute(message, args, Discord, randomind){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#00FFDF')
        .setTitle('You flipped a coin!')
        .setURL('')
        .setDescription(links[randomind])
        .setImage('')

        message.channel.send(newEmbed)

    }
}