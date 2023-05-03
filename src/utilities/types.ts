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
 
  type Conversation = {
    title: string;
    messages: Message[];
  };
  interface AreaChatProps {
    conversations: Conversation[];
  }

  interface HistoryProps {
    conversations: Conversation[];
    onConversationClick: (index: number) => void;
    setActiveConversationIndex:React.Dispatch<React.SetStateAction<number>>;
  }