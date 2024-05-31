require('dotenv').config();
const OpenAI = require('openai');
const openai = new OpenAI();

const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online.`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'hello') {
    message.reply('hello');
  }
});
openai.apiKey = process.env.OPENAI_API_KEY;

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'summarize') {
    return interaction.reply('hey!');
  }

  if (interaction.commandName === 'ping') {
    return interaction.reply('Pong!');
  }
});



/*
client.on('messageCreate', async (message) => {
  if (message.author.bot) {
    return;
  }

  // Send the message content to the OpenAI API
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: message.content, max_tokens: 50}],
      model: "gpt-3.5-turbo-0125",
    });
  
    message.reply(completion.choices[0].message.content);
    } catch (error) {
    console.error('Error calling OpenAI API:', error);
  }
});

*/

client.login(process.env.DISCORD_BOT_TOKEN);