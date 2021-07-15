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
      const encodedUsername = encodeURI(args.shift());
      const userData = await fetch(`${url}${encodedUsername}`).then(response => response.json());

      const userDataEmbed = new Discord.MessageEmbed()
        .setColor('#b1361e')
        .setAuthor('Code Wars', 'https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png', 'https://www.codewars.com/')
        .setDescription(`Informations du compte de ${args.shift()}.`)
        .setThumbnail('https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png')
        .addFields(
          { name: 'Rang:', value: userData.ranks.overall.name, inline: true },
          { name: 'Nombre de Kata terminé:', value: userData.codeChallenges.totalCompleted, inline: true },
          { name: 'Classement:', value: userData.leaderboardPosition, inline: true },
        )
        .setTimestamp()
        .setFooter('Bot dev par Nekå', 'https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png');

      message.channel.send(userDataEmbed);
      console.log(userData);

    } else if(command === 'cw' && args.length === 0) {
      message.channel.send('Il manque un pseudo CodeWars pour répondre à cette requête.');
    };

});

client.login(token);
