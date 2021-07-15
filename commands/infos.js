const fetch = require('node-fetch');

client.on('message', async message => {
  const url = "https://www.codewars.com/api/v1/users/";

	if(command === '!cw' && args !== undefined) {
		const { file } = await fetch(url).then(response => response.json());
		message.channel.send(file);
	}
});
