import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';


const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_OPENIA_KEY
});
const openai = new OpenAIApi(configuration);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("hola")
  if (req.method === 'POST') {
    const prompt = req.body.prompt;

    try {
      const response = await openai.createCompletion({
        model: 'gpt-3.5-turbo',
        prompt: prompt,
        max_tokens: 20,
        temperature: 0.7,
      });

      res.status(200).json(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
