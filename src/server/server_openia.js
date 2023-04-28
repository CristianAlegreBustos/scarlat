// Debes agregar ".js" al final de los módulos que importes.
import { createServer } from 'http';
import { parse } from 'url';
import { Configuration, OpenAIApi } from 'openai';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

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
  const { messages } = req.body;

  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages must be an array' });
  }

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are an assistant to answer questions about Personal Pay app',
      },
      ...messages,
    ],
  });
  res.json({
    completion: completion.data.choices[0].message,
  });
});

const port = process.env.PORT || 3001;

api.listen(port, () => {
  console.log(`First Open IA Api example listening at http://localhost:${port}`);
});
