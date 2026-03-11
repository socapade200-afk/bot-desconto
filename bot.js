require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('clientReady', () => {
  console.log('Bot online!');
});

client.on('messageCreate', message => {

  if (message.author.bot) return;

  if (message.content.startsWith('!desconto')) {

    const args = message.content.split(' ');
    const preco = parseFloat(args[1]);

    if (!preco) {
      return message.reply('Use: !desconto valor');
    }

    const d20 = preco * 0.8;
    const d25 = preco * 0.75;
    const d30 = preco * 0.7;
    const d35 = preco * 0.65;

    message.reply(
`💰 Cálculo de Desconto

Preço original: $${preco}

20% → $${d20}
25% → $${d25}
30% → $${d30}
35% → $${d35}`
    );

  }

});

client.login(process.env.TOKEN);