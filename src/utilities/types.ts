interface Message {
    role: string;
    content: {
      text: string;
    };
  }
  
  interface ConversationAreaProps {
    messages: Message[];
  }

  interface CodeMessage{
    code:string;
    language:string
    messageRole:string;
  }

  interface TextMessage{
    text:string;
    messageRole:string;
  }