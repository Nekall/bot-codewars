const fetch = require('node-fetch');

client.on('message', async message => {
	// ...
  url = link = "https://www.codewars.com/api/v1/users/" + args;
	if (command === '!cw' && arg !== undefined) {
		const { file } = await fetch(link).then(response => response.json());
		message.channel.send(file);
	}
});

/*
client.on('message', message => {
	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');
	} else if (message.content.startsWith(`${prefix}beep`)) {
		message.channel.send('Boop.');
	}
});
*/
