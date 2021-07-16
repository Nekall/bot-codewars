require("dotenv").config();
const url = "https://www.codewars.com/api/v1/users/";
const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;
const prefix = "cw!";

client.once("ready", () => {
   console.log("Bot Discord CODE WARS initialisé.");
});

client.on("message", async message => {
// Check si prefix présent + pas message du bot
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

//help
    if(command === "help") {
      const helpEmbed = new Discord.MessageEmbed()
        .setColor("#b1361e")
        .setAuthor("CodeWars", "https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png", "https://www.codewars.com/")
        .addFields(
          { name: "Pour voir les informations d'un utilisateur:", value: "cw!info Pseudo" },
          { name: "Internet ?",value: "!internet" },
          { name: "\u200B", value: "\u200B" },
        )
        .setTimestamp()
        .setFooter("Dev par Nekå", "https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png");
      message.channel.send(helpEmbed);
    };

//easteregg
    if(command === "internet") {
      message.channel.send("INTERNET!");
    };

    //fetch info user cw
    if(command === 'info' && args.length !== 0) {
      const encodedUsername = encodeURI(args.shift());
      const userData = await fetch(`${url}${encodedUsername}`).then(response => response.json());
      if(userData.success === false){
        message.channel.send("Pseudo CodeWars introuvable.");
        return;
      };
      const userDataEmbed = new Discord.MessageEmbed()
        .setColor("#b1361e")
        .setAuthor("CodeWars", "https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png", "https://www.codewars.com/")
        .setDescription(`Informations du compte de ${userData.username}.`)
        .addFields(
          { name: "Rang:", value: userData.ranks.overall.name },
          { name: "Classement:",value: userData.leaderboardPosition },
          { name: "Nombre de Kata terminé:", value: userData.codeChallenges.totalCompleted },
          { name: "\u200B", value: "\u200B" },
        )
        .setTimestamp()
        .setFooter("Dev par Nekå", "https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png");
      message.channel.send(userDataEmbed);
    } else if(command === "cw" && args.length === 0) {
      message.channel.send("Il manque un pseudo CodeWars pour répondre à cette requête. Exemple: cw!info Pseudo");
    };

    //fetch languages user cw
    if(command === 'lang' && args.length !== 0) {
      const encodedUsername = encodeURI(args.shift());
      const userData = await fetch(`${url}${encodedUsername}`).then(response => response.json());
      if(userData.success === false){
        message.channel.send("Pseudo CodeWars introuvable.");
        return;
      };
      const userDataEmbed = new Discord.MessageEmbed()
        .setColor("#b1361e")
        .setAuthor("CodeWars", "https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png", "https://www.codewars.com/")
        .setDescription(`Langages de programmation du compte de ${userData.username}.`)
        .setTimestamp()
        .setFooter("Dev par Nekå", "https://raw.githubusercontent.com/Nekall/bot-codewars/main/codewars.png");
      message.channel.send(userDataEmbed);
    } else if(command === "cw" && args.length === 0) {
      message.channel.send("Il manque un pseudo CodeWars pour répondre à cette requête. Exemple: cw!info Pseudo");
    };

    {userData.ranks.languages.length > 0?
      for(let i = userData.ranks.languages.length; i--;){
        userDataEmbed.addField(userData.ranks.languages, userData.ranks.languages.name, true)
      }
    :
      userDataEmbed.addField("Langages", "Aucunes", true)
    }

});

client.login(token);
