const openai = require('openai');
require('dotenv').config();

openai.apiKey = process.env.OPENAI_API_KEY;

client.on('messageCreate', async (message) => {
  console.log("hi");
  if (message.author.bot) {
    return;
  }

  // Send the message content to the OpenAI API
  const gptResponse = await openai.Completion.create({
    engine: 'gpt-3.5-turbo-0125',
    prompt: message.content,
    max_tokens: 100,
  });

  // Reply with the first generated message
  message.reply(gptResponse.choices[0].text.trim());
});