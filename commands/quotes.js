const links = ["“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.” -Thomas A. Edison","“You must expect great things of yourself before you can do them.” -Michael Jordan","“Obstacles are necessary for success because in selling, as in all careers of importance, victory comes only after many struggles and countless defeats.” -Og Mandino","“It is during our darkest moments that we must focus to see the light.” – Aristotle Onassis","“We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.” -Plato","“The only thing we have to fear is fear itself.” – Franklin D. Roosevelt","“Only put off until tomorrow what you are willing to die having left undone.” – Pablo Picasso","“The greater danger for most of us isn’t that our aim is too high and miss it, but that it is too low and we reach it.” – Michelangelo","“A goal properly set is halfway reached.” – Zig Ziglar","“Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act. There is no other route to success.” – Pablo Picasso","“Plans are nothing; planning is everything.” – Dwight D. Eisenhower","“Learning never exhausts the mind.” – Leonardo da Vinci","“Work gives you meaning and purpose and life is empty without it.” – Stephen Hawking","“Your time is limited, so don’t waste it living someone else’s life.” –Steve Jobs","“Whether you think you can or you think you can’t, you’re right.” –Henry Ford"]
const { DiscordAPIError } = require("discord.js")


module.exports= {
    name: 'quotes',
    description: "quotes command",
    execute(message, args, Discord, randomind){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#72122A')
        .setTitle('Quote')
        .setURL('')
        .setDescription(links[randomind])

        message.channel.send(newEmbed)

    }
}