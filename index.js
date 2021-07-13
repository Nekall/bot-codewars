require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;

client.once('ready', () => {
   console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

client.login(token);

client.on('message', message => {
	if(message.content.startsWith(`!beep`)) {
		message.channel.send('Boop.');
	}
});

client.on("message", message => {
  if(message.content === "!ping") {
    message.channel.send("Pong.")
  }
})
