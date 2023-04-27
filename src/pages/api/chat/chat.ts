// pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_OPENIA_KEY,
});

const openai = new OpenAIApi(configuration);

const chat = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { messages } = req.body;

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages must be an array' });
    }

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an assistant to answer questions about Personal Pay app',
        },
        ...messages,
      ],
    });

    res.json({
      completion: completion.data.choices[0].message,
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default chat;
