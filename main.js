const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '>';

const fs = require('fs')

const validPermissions = [
   "CREATE_INSTANT_INVITE",
   "KICK_MEMBERS",
   "BAN_MEMBERS",
   "ADMINISTRATOR",
   "MANAGE_CHANNELS",
   "MANAGE_GUILD",
   "ADD_REACTIONS",
   "VIEW_AUDIT_LOG",
   "PRIORITY_SPEAKER",
   "STREAM",
   "VIEW_CHANNEL",
   "SEND_MESSAGES",
   "SEND_TTS_MESSAGES",
   "MANAGE_MESSAGES",
   "EMBED_LINKS",
   "ATTACH_FILES",
   "READ_MESSAGE_HISTORY",
   "MENTION_EVERYONE",
   "USE_EXTERNAL_EMOJIS",
   "VIEW_GUILD_INSIGHTS",
   "CONNECT",
   "SPEAK",
   "MUTE_MEMBERS",
   "DEAFEN_MEMBERS",
   "MOVE_MEMBERS",
   "USE_VAD",
   "CHANGE_NICKNAME",
   "MANAGE_NICKNAMES",
   "MANAGE_ROLES",
   "MANAGE_WEBHOOKS",
   "MANAGE_EMOJIS"
]




client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
   const command = require(`./commands/${file}`);

   client.commands.set(command.name, command);

}



client.once('ready', () => {
   console.log('Lights Bot is now online!');
   client.user.setActivity('>help', { type: 'PLAYING' });
});

client.on('message', message => {
   console.log(message.content);
   if (message.content === prefix) {

      const newEmbed = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Error') //nice
         .setURL('')
         .setDescription('This command is unavailable. Try ">help" instead!')

      message.channel.send(newEmbed)
      return;

   }
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();
   console.log('command', command);

   if (command === 'ping') {
      client.commands.get('ping').execute(message, args, Discord);
   }
   if (command === 'help') {
      client.commands.get('help').execute(message, args, Discord);
   }
   if (command === 'hello') {
      client.commands.get('hello').execute(message, args, Discord);
   }
   if (command === 'test') {
      client.commands.get('test').execute(message, args, Discord);
   }
   if (command === 'kick') {
      mycommand = client.commands.get('kick')
      console.log("commands", mycommand)
      if (mycommand.permissions.length) {
         let invalidPerms = []
         for (const perm of mycommand.permissions) {
            if (!validPermissions.includes(perm)) {
               return console.log(`Invalid Permissions ${perm}`);
            }
            if (!message.member.hasPermission(perm)) {
               invalidPerms.push(perm);
            }
         }
         if (invalidPerms.length) {
            return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
         }
      }
      client.commands.get('kick').execute(message, args,);
   }
   if (command === 'ban') {
      mycommand = client.commands.get('ban')
      console.log("commands", mycommand)
      if (mycommand.permissions.length) {
         let invalidPerms = []
         for (const perm of mycommand.permissions) {
            if (!validPermissions.includes(perm)) {
               return console.log(`Invalid Permissions ${perm}`);
            }
            if (!message.member.hasPermission(perm)) {
               invalidPerms.push(perm);
            }
         }
         if (invalidPerms.length) {
            return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
         }
      }
      client.commands.get('ban').execute(message, args,);
   }
   if (command === 'meme') {
      let randomind = Math.floor(Math.random() * 14)
      client.commands.get('meme').execute(message, args, Discord, randomind);
   }
   if (command === 'quotes') {
      let randomind = Math.floor(Math.random() * 15)
      client.commands.get('quotes').execute(message, args, Discord, randomind);
   }
   if (command === 'coinflip') {
      let randomind = Math.floor(Math.random() * 2)
      client.commands.get('coinflip').execute(message, args, Discord, randomind);
   }
   if (command === 'funfact') {
      let randomind = Math.floor(Math.random() * 20)
      client.commands.get('funfact').execute(message, args, Discord, randomind);
   }
   if (command === 'dharmann') {
      let randomind = Math.floor(Math.random() * 15)
      client.commands.get('dharmann').execute(message, args, Discord, randomind);
   }
   if (command === 'joke') {
      client.commands.get('joke').execute(message, args, Discord);
   }
   if (command === 'prefix') {
      client.commands.get('prefix').execute(message, args, Discord);
   }
   if (command === 'inf') {
      client.commands.get('inf').execute(message, args, Discord);
   }
   if (command === 'credits') {
      client.commands.get('credits').execute(message, args, Discord);
   }
   if (command === 'info') {
      client.commands.get('info').execute(message, args, Discord);
   }
   if (command === 'faq') {
      client.commands.get('faq').execute(message, args, Discord);
   }
   if (command === 'kill-me') {
      client.commands.get('kill-me').execute(message, args, Discord);
   }
   if (command === 'gay') {
      client.commands.get('gay').execute(message, args, Discord);
   }

});

client.login('ODkyNjk2ODcyNTg4ODIwNTEx.YVQqvw.2AYfs2-HHBjY-B30WQsZA9JcAXg');