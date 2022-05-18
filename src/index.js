const { Client, Intents, Collection} = require('discord.js')
const fs = require('fs')
const path = require(`path`)
require('dotenv').config()
require('discord-buttons')(client)

const client = new Client({
   intents: [
      Intents.FLAGS.GUILD
   ]
})

client.commands = new Collection()

const eventsPath = path.join(__dirname, 'events')
const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith('.js'))
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith('.js'))
const commandFolders = fs.readdirSync("./src/commands")



let znail = {
   client,
   prefix: "%",
   owners: ["448676822234824705"]
}

module.exports = znail

(async () => {
   for (file of functions) {
      require.resolve(`./functions${file}`)(client)
   }

   client.login(process.env.TOKEN)
})();