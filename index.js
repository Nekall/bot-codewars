require("dotenv").config();
const url = "https://www.codewars.com/api/v1/users/";
const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;
const prefix = "!";

client.once("ready", () => {
   console.log("Bot Discord CODE WARS initialisé.");
});

client.on("message", async message => {
// Check si prefix présent + pas message du bot
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

//test
    if(command === "beep") {
      message.channel.send('Boop!');
    };

    if(command === "ping") {
      message.channel.send('Pong!');
    };

    //test avec arguments
    if(command === 'cw' && args.length !== 0) {
      const file = await fetch(`${url}${args.shift()}`).then(response => response.json());
      message.channel.send("Check console");
      console.log(args);
      console.log((file.honor).text());
    } else if(command === 'cw' && args.length === 0) {
      message.channel.send('Il manque un pseudo CodeWars pour répondre à cette requête.');
    };

});

client.login(token);
