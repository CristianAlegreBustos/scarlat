interface Message {
    role: string;
    content: {
      text: string;
    };
  }
  
  interface ConversationAreaProps {
    messages: Message[];
  }