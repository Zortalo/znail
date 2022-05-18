module.exports = (client) => {
   client.handleEvents = async (eventFiles, path) => {
      for (const file of eventFiles) {
         const filePath = path.join(eventsPath, file);
         const event = require(filePath);
         if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
         } else {
            client.on(event.name, (...args) => event.execute(...args, client));
         }
      }
   }
}