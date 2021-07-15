require("dotenv").config();
const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;
const prefix = "!";

client.once("ready", () => {
   console.log("Bot Discord CODE WARS initialisé.");
});

client.on("message", (message) => {
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
    if(command === "cw") {
      console.log(args);
    };

});

client.login(token);
