const Discord = require('discord.js');
const client = new Discord.Client();
const token = "ODUyODc3ODAzMjcxMzU2NDI2.YMNOWg.cTDSYIXa3_zYvlP11rke0kgh7RU";

client.once('ready', () => {
   console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

client.login(token);
