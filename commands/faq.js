const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'faq',
    description: "faq command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#FE5512')
        .setTitle('**FAQ**')
        .setURL('')
        .setDescription('**Is this a gaming server or what?**\n Kind of... This server is mostly for community but we also do topics over gaming, and we have tons of bots for fun! Sooo yeah. Half i guess...!\n**What is poop?**\npoop is a substance that comes out of your body after eating something otherwise know as the digestive track\n**Why u guys ping a lot?**\nThe reason why we ping a lot is because we are a small server and we understand no one wants to be pinged but we need to make people be active on the server so it becomes popular and then we wont ping much\n**Is this your first community server?**\nActually... No! My first community server started all the way back in early 2021! After that, i started the FIRST Lights Planet. ')

        message.channel.send(newEmbed)

    }
}