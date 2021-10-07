const links = ["https://www.youtube.com/watch?v=6l71YMM2Ufc","https://www.youtube.com/watch?v=mFp_gG9pwdc","https://www.youtube.com/watch?v=MZlMOepZuqA","https://www.youtube.com/watch?v=KBByHnaTf50","https://www.youtube.com/watch?v=OFt2DFc6nRA","https://www.youtube.com/watch?v=8IhesN7J60c","https://www.youtube.com/watch?v=sbsgz6OngfI","https://www.youtube.com/watch?v=4lHoBFHv7s8","Bro, No videos for you","cHeCk yOuR iNtErNeT cOnNEctIoN","You dont deserve this guy's **VIDEOS** bro","Okay, in your dreams","Hmmmm. No DharMann Videos in stock right now...","lol no","Damn, take a break from dhar mann videos",]
const { DiscordAPIError } = require("discord.js")


module.exports= {
    name: 'dharmann',
    description: "dharmann command",
    execute(message, args, Discord, randomind){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#622121')
        .setTitle('Here is a random Dhar Mann video!')
        .setURL('')
        .setDescription(links[randomind])
        .setImage('http://www.dharmann.com/wp-content/uploads/2021/08/homepage-og.png')

        message.channel.send(newEmbed)

    }
} 