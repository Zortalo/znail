const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client({
   intents: [
      "GUILDS",
      "GUILD_MESSAGES"
   ]
})

client.on('ready', () => {
   console.log(`Activated ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
   if (message.content == "rules"){
      message.reply("hello!")
   }
})

client.login(process.env.TOKEN)