interface Message {
    role: string;
    content: {
      text: string;
    };
  }
  
  interface ConversationAreaProps {
    messages: Message[];
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }

  interface CodeMessage{
    code:string;
    language:string
    messageRole:string;
  }

  interface TextMessage{
    text:string;
    messageRole:string;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }
  interface Titles {
    titles: [];
  }
 