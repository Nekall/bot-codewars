const fetch = require('node-fetch');
require('dotenv').config()

client.on('message', async message => {
  url = link = "https://www.codewars.com/api/v1/users/" + args;
	if (command === '!cw' && arg !== undefined) {
		const { file } = await fetch(link).then(response => response.json());
		message.channel.send(file);
	}
});


client.on('message', message => {
	if (message.content.startsWith(`Ping`)) {
		message.channel.send('Pong.');
	} else if (message.content.startsWith(`Beep`)) {
		message.channel.send('Boop.');
	}
});

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;

client.once('ready', () => {
   console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

client.login(token);
