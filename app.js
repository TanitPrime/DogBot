const Discord = require('discord.js');
const client = new Discord.Client();
const message = require('./message');
require('dotenv').config();

let interval;
const minute = 60000;
let time = 60*minute
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  interval = setInterval(()=>{message(process.env.CLIENT_ID,client);},time)
});
client.on('message', msg => {
  if (msg.content.startsWith("time")) {
    let x;
    x=parseInt(msg.content.replace('time',''));
    time = x*minute;
    msg.reply(`message interval is now ${x} minute(s)`);
    clearInterval(interval);
    console.log(`interval cleared and set to ${time}`);
    interval = setInterval(()=>{message(process.env.CLIENT_ID,client);},time);
  }
});


client.login(process.env.TOKEN)
.then(console.log("something"))
.catch((err)=>console.log(err))

