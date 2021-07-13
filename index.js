const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;
require('dotenv').config();

client.once('ready', () => {
   console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

client.login(token);
//test
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

//fetch
client.on('message', async message => {
  url = "https://www.codewars.com/api/v1/users/" + args;
	if(command === '!cw' && arg !== undefined) {
		const { file } = await fetch(url).then(response => response.json());
		message.channel.send(file);
	}
});
