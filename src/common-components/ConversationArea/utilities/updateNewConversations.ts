import { Dispatch, SetStateAction } from "react";

type Conversation = {
  title: string;
  messages: Array<{ role: string; content: { text: string } }>;
};

export const updateConversations = async (options: {
  action: string;
  setConversations: Dispatch<SetStateAction<Conversation[]>>;
  conversationIndex?: number;
  message?: string | null;
}) => {
  switch (options.action) {
    case "addUserMessage":
        console.log(options.message)
      options.setConversations((prevConversations: Conversation[]) => {
        const newMessage = [...prevConversations];
        newMessage[options.conversationIndex||0].messages.push({
          role: "user",
          content: { text: options.message||" "},
        });
        return newMessage;
      });
      break;

    case "addAssistantMessage":
        console.log(options.message)
      options.setConversations((prevConversations: Conversation[]) => {
        const newMessage = [...prevConversations];
        newMessage[options.conversationIndex||0].messages.push({
          role: "assistant",
          content: { text: options.message||" " },
        });
        return newMessage;
      });
      break;

    default:
      break;
  }
};
