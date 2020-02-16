module.exports = {
	name: "ready",
	run: function (Bot, args) {
		console.log("Connected");
		console.log("\033[31;1mLogin\033[0m: " + Bot.user.tag)
		console.log("\033[92;1mUsers\033[0m: " + Bot.users.size)
		console.log("\033[95;1mGuilds\033[0m: " + Bot.guilds.size)
	}
}
