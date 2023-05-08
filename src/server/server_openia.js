import { Configuration, OpenAIApi } from 'openai';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import instructions from "./instructions.js"
dotenv.config();

const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_OPENIA_KEY,
});

const openai = new OpenAIApi(configuration);

const api = express();
api.use(bodyParser.json());
api.use(cors());

api.post('/', async (req, res) => {
  const { messages, topic } = req.body;
console.log(messages)
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages must be an array' });
  }

  const instruction = instructions[topic] || 'You are a general-purpose assistant.';
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 1,
    messages: [
      {
        role: 'system',
        content: instruction,
      },
      ...messages,
    ],
  });
  console.log( completion.data.choices[0].message);
  res.json({
    completion: completion.data.choices[0].message,
  });
});

const port = process.env.PORT || 3001;

api.listen(port, () => {
  console.log(`First Open IA Api example listening at http://localhost:${port}`);
});
