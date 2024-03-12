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

// TODO: Remove
// Ping Pong test to check if the bot can reply
client.on('messageCreate', (message) => {
    if (message.content === 'Ping'){
        message.reply('Pong!')
    }
});

// TODO: Add condition to check if a bot has been triggered

// Find the channel and send a message
// const channel = client.channels.cache.find(channel => channel.name === allowedChannel);
// channel.send('${username}, please use bots here.);

// Log in to Discord with your client's token
client.login(token);
