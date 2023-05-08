# Scarlat

Scarlat is a project that aims to create an assistant using the OpenAI API.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- Development with Next.js and React.
- Styling with Sass and Tailwind CSS.
- Utilizes OpenAI API.
- Stores answers in MongoDB.

## Requirements

- Node.js 18 or higher.
- Subscription to OpenAI API.
- Internet Connection.

## Installation

1. Clone the repository to your local machine.
2. Install the dependencies with `npm install`.
3. Create a `.env` file with the following variables:
    - `ORGANIZATION`: The key of your OpenAI organization.
    - `API_OPENAI_KEY`: Your OpenAI secret key.

## Getting Started - Chat Interface

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## Getting Started - Chat Server

Second, run the OpenAI server

```bash
node src/server/server_openia.js
```
## Use

You can enter the chat interface on `http://localhost:3000/scarlat-chat`.

## Other Instructions

The server_openia is prepared to received differents instruccion or profile. The only you need to do is create a file in the same folder than server_openia.js called instructions.js 

```bash
const instructions = {
    'profile1': 'You are a personal assitant',
    'language_detection': 'You are an assistant to help with language detection.',
    ## add more profile here
  };

  export default instructions
```
The gpt-4 model follows more strictly the instructions that you pass through the system

## Learn More

To learn more about OpenAi api visit the next resources: 

- [OpenAI Documentation](https://platform.openai.com/docs/introduction)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
