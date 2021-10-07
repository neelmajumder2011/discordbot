const links = ["https://cdn.vox-cdn.com/thumbor/cV8X8BZ-aGs8pv3D-sCMr5fQZyI=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19933026/image.png","https://i.guim.co.uk/img/media/a48763efc6a7f237fa557100fb11aa001b2960c2/0_42_745_447/master/745.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=77e03b4eecf000e79e073d4ed46d24b5","https://video-images.vice.com/articles/5dfcdf5174a820009a1b4a41/lede/1576853802436-chicky-nuggies.jpeg?crop=1xw%3A1xh%3Bcenter%2Ccenter&resize=2000%3A*","https://www.iqmetrix.com/hubfs/Meme%2021.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFh4tGIDHFs7-VUl4xgQ7jXBDuPc-lbcGgfA&usqp=CAU","https://www.thediscoveriesof.com/wp-content/uploads/2018/09/Spare-Seat-on-Plane-Meme-.jpg.webp","https://i.pinimg.com/originals/e3/2c/e7/e32ce76b21b7953e0badb1eceffff524.jpg","https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-meme-netflix-funny-1000x666.png","","https://cms.qz.com/wp-content/uploads/2018/07/meme-featured.jpg?quality=75&strip=all&w=900&h=900&crop=1","https://blog.hubspot.com/hs-fs/hubfs/futurama-fry-meme-marketing.jpg?width=600&name=futurama-fry-meme-marketing.jpg","https://s.hdnux.com/photos/01/16/01/42/20453548/3/1200x0.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZDg8CSGC1m9YOK3SlJx2SDfJ_EfTC6S5gQ&usqp=CAU","https://ichef.bbci.co.uk/news/640/cpsprodpb/167AE/production/_97687029_ddithemath.jpg"]
const { DiscordAPIError } = require("discord.js")


module.exports= {
    name: 'meme',
    description: "meme command",
    execute(message, args, Discord, randomind){
        const newEmbed = new  Discord.MessageEmbed()
        .setColor('#E3DC2A')
        .setTitle('Meme')
        .setURL('')
        .setDescription('')
        .setImage(links[randomind])

        message.channel.send(newEmbed)

    }
}