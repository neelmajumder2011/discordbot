const { DiscordAPIError } = require("discord.js")

module.exports= {
    name: 'credits',
    description: "credits command",
    execute(message, args, Discord){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#6361C8')
        .setTitle('Here are the credits!')
        .setURL('')
        .setDescription('**Server Owner**\n`The Light#5002`\n**Godly Co-Founder**\n`Unknown Kitten#9058`\n**Co-Owner**\n`Gabb#1482`, `Kazuha#5917`\n**Administartor**\n`Cross™#0001`, `roaviationist#4822`, `𝓼𝓹𝓮𝓬𝓽𝓻𝓮...⚡#5399`\n**Moderator**\n`Tiger735x_TG#8115`, `Away#4487`')
        .setFooter('A big thanks for these people to keep the server up!')
        message.channel.send(newEmbed)

    }
}