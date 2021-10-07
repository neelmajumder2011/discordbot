const links = ["Humans are the Only Animals That Enjoy Spicy Foods.","Humans Are the Only Animals Whose Brains Shrink.","Potato Chips Cause More Weight Gain Than Any Other Food.","That Fish is Probably Labeled Wrong.","Bananas Can't Reproduce.","It's Impossible to Hum While You Hold Your Nose.","The Least Interesting Day in History was April 11, 1954","Aldous Huxley and C.S. Lewis Died on the Same Day as JFK","Bigger Forks Lead You to Eat Less","Cell Phones Are Full of Bacteria","The Longest-Living Insect is the Termite","Chewing Gum After a Meal Reduces Heartburn","Dogs Can Smell Cancer","Bees Can Detect Bombs","Boyfriends Do More Housework Than Husbands","The World's Biggest Tire Producer is LEGO","The Longest Word You can Type With Just Your Left Hand is “Sweaterdresses”","Naps Could Save Your Life","You Sleep Deeper on a Hammock Than a Bed","Newborns Don't Shed Tears"]
const { DiscordAPIError } = require("discord.js")


module.exports= {
    name: 'funfact',
    description: "funfact command",
    execute(message, args, Discord, randomind){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#714163')
        .setTitle('Here’s a fun fact!')
        .setURL('')
        .setDescription(links[randomind])
        .setImage('')

        message.channel.send(newEmbed)

    }
}