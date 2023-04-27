import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import nextConfig from '../next.config';
import { default as getConfig } from 'next/config';
import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  conf: nextConfig,
});

const handle = app.getRequestHandler();
const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_OPENIA_KEY,
});
const openai = new OpenAIApi(configuration);

const server = createServer((req, res) => {
  const parsedUrl = parse(req.url || "", true);
  handle(req, res, parsedUrl);
});

const port = process.env.PORT || 3001;

app.prepare().then(() => {
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});

const api = express();
api.use(bodyParser.json());
api.use(cors());

api.post("/api/chat", async (req, res) => {
    const { messages } = req.body;
    console.log(messages);
    
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages must be an array' });
    }
  
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content":
            "You are an assistant to answer questions about Personal Pay app",
        },
        ...messages,
      ]
    });
    res.json({
      completion: completion.data.choices[0].message,
    });
});

api.listen(getConfig().serverRuntimeConfig.PORT, () => {
  console.log(
    `First Open IA Api example listening at http://localhost:${port}`
  );
});
