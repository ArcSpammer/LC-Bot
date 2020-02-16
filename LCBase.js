const Discord = require("discord.js"),
Bot = new Discord.Client(),
fs = require("fs");
Bot.cfg = require("./config.js");
Bot.cc = require("./commands/cc.js");

Bot.login(Bot.cfg.token);
console.log("Connecting...");

const events_list = fs.readdirSync("./events");

//LOAD EVENTS BLYAT
events_list.forEach(file => {
	const event = require("./events/" + file);
	Bot.on(event.name, (...args) => event.run(Bot, args));
})

//LOAD COMMANDS CYKA
Bot.commands = {};
const commands_list = fs.readdirSync("./commands");
commands_list.forEach(file => {
	const cmd = require("./commands/" + file);
	Bot.commands[cmd.name] = cmd;
})
