interface Message {
    role: string;
    content: {
      text: string;
    };
  }
  
  interface ConversationAreaProps {
    messages: Message[];
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setConversations:React.Dispatch<React.SetStateAction<{ title: string; messages: Message[]; }[]>>
    activeConversationIndex:Number
  }

  interface CodeMessage{
    code:string;
    language:string
    messageRole:string;
  }

  interface TextMessage{
    index?:number | null
    initialText:string;
    messageRole:string;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    updateMessage?:(index: number, newText: string)=>void
    setConversations?:React.Dispatch<React.SetStateAction<{ title: string; messages: Message[]; }[]>>
    activeConversationIndex?:Number
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
    setActiveConversationIndex:React.Dispatch<React.SetStateAction<number>>;
    onDeleteConversation: (index: number) => void;
    onEditConversationTitle: (index: number, newTitle: string) => void;
  }

  interface IconButtonProps {
    icon: React.ReactNode | String;
    onClick: () => void;
    className?: string;
  }
  interface AreaChatProps {
    getTitles: (questions: string, answer: string) => Promise<void>;
    conversations: Conversation[];
    activeConversationIndex: number;
    setConversations: React.Dispatch<
      React.SetStateAction<{ title: string; messages: Message[] }[]>
    >;
  }

  interface AreaChatProps {
    getTitles: (questions: string, answer: string) => Promise<void>;
    conversations: Conversation[];
    activeConversationIndex: number;
    setConversations: React.Dispatch<
      React.SetStateAction<{ title: string; messages: Message[] }[]>
    >;
  }