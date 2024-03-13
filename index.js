const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token, allowedChannel } = require('./config.json');

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', (message) => {
	const isBotMessage = message.author.bot && message.author !== client.user;
    const isNotInAllowedChannel = message.channel.name !== allowedChannel;

    if (isBotMessage && isNotInAllowedChannel) {
		// Reply if it's an interaction or a slash command
        if (message.type === 19 || message.type === 20) {
            const channel = client.channels.cache.find(channel => channel.name === allowedChannel);
            message.reply(`Please use bots in <#${channel.id}>`);
        }
    }
});

// Log in to Discord with your client's token
client.login(token);
