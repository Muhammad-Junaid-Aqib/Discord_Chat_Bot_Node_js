const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('messageCreate', (message) => {
    // console.log(message)
    if (message.author.bot) return 
    message.reply({
        content: 'Hi from ' + message.author.username
    })
})

client.login('MTIwMjMwMDYxMDIwOTQwMjkwMA.GpYxCC.UZFctF-Paiyc1xLgNobPAkK0445nBMHGWF3uTw')