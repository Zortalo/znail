module.exports = (client) => {
   client.handleCommands = async (commandFolders, path) => {
      client.commandArray = []
      for (folder of commandFolders) {
         const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

         for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file)
            const command = require(filePath)
            // Set a new item in the Collection
            // With the key as the command name and the value as the exported module
            client.commands.set(command.data.name, command)
            client.commandArray.push(command.data.toJSON())
         }
      }
   }
}