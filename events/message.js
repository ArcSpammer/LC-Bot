module.exports = {
	name: "message",
	run: function (Bot, args) {
		const message = args[0];
        
        if (
			message.author.bot ||
			(!message.content.startsWith(Bot.cfg.prefix) &&
			!message.content.startsWith(`<@!${Bot.user.id}>`))) return;
		
		const mentioned = message.content.startsWith(`<@!${Bot.user.id}>`);

		//If a mention is used, substract the length of the mention, otherwise substract the length of the prefix
		const trimmed = message.content.substr(mentioned ? `<@!${Bot.user.id}>`.length : Bot.cfg.prefix.length).trim();
		
		//Remove all double spaces, and split on spaces
		const arguments = trimmed.replace(/ {2,}/g, " ").split(" ");
		const command = arguments.shift();

		console.log(Bot.commands);
		
		console.log("commands: ", command);
		console.log("arguments: ", arguments);

		if (Bot.commands[command]) {
            const cmd = Bot.commands[command];
            try {
				cmd.run(Bot, message, arguments);
			} catch (err) {
				console.log(err)
				message.reply("ERROR OCCURED UwU")
			}
			console.log("reeeee");

		} else {
			message.channel.send("Command not found")
		}
        
	}
}
