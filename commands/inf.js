const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'inf',
    description: "inf command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#464786')
        .setTitle('INF!')
        .setURL('')
        .setDescription('Infinity...')
        .setImage('https://i1.wp.com/www.sporcle.com/blog/wp-content/uploads/2018/11/1-80.jpg?resize=1280%2C720&ssl=1')

    

        message.channel.send(newEmbed)

        

    }
}