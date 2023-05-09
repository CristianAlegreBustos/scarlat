import { Dispatch, SetStateAction } from "react";

type Conversation = {
  title: string;
  messages: Array<{ role: string; content: { text: string } }>;
};

export const updateNewConversations = async (options: {
  action: string;
  setConversations: Dispatch<SetStateAction<Conversation[]>>;
  conversationIndex?: number;
  message?: string | null;
  indexMessage?: number;
  conversations?: Conversation[];
}) => {
  switch (options.action) {
    case "addUserMessage":
      options.setConversations((prevConversations: Conversation[]) => {
        const newMessage = [...prevConversations];
        newMessage[options.conversationIndex || 0].messages.push({
          role: "user",
          content: { text: options.message || " " },
        });
        return newMessage;
      });
      break;

    case "addAssistantMessage":
      options.setConversations((prevConversations: Conversation[]) => {
        const newMessage = [...prevConversations];
        newMessage[options.conversationIndex || 0].messages.push({
          role: "assistant",
          content: { text: options.message || " " },
        });
        return newMessage;
      });
      break;
      case "addRechargedAssistantMessage":
        options.setConversations((prevConversations: Conversation[]) => {
          const newMessage = [...prevConversations];
          const conversationIndex = options.conversationIndex || 0;
          const lastIndex = (newMessage.length > 0 && newMessage[conversationIndex].messages.length - 1) || 0;
          newMessage[conversationIndex].messages[lastIndex] = {
            role: "assistant",
            content: { text: options.message || " " },
          };
          return newMessage;
        });
      
      break;

    default:
      break;
  }
};
