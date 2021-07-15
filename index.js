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

//easteregg
    if(command === "internet") {
      message.channel.send('INTERNET!');
    };

    //fetch info user cw
    if(command === 'cw' && args.length !== 0) {
      const encodedUsername = encodeURI(args.shift());
      const userData = await fetch(`${url}${encodedUsername}`).then(response => response.json());

      const userDataEmbed = new Discord.MessageEmbed()
        .setColor('#b1361e')
        .setAuthor('Code Wars', 'https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png', 'https://www.codewars.com/')
        .setDescription(`Informations du compte de ${userData.username}.`)
        .addFields(
          { name: 'Rang:', value: userData.ranks.overall.name },
          { name: 'Classement:',value: userData.leaderboardPosition },
          { name: 'Nombre de Kata terminé:', value: userData.codeChallenges.totalCompleted },
          { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter('Dev par Nekå', 'https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png');
      message.channel.send(userDataEmbed);
    } else if(command === 'cw' && args.length === 0) {

      message.channel.send('Il manque un pseudo CodeWars pour répondre à cette requête. Exemple: !cw Pseudo');
    };

});

client.login(token);
