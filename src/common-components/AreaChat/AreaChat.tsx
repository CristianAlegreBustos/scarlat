import { useState, useCallback, useEffect } from "react";
import cn from "classnames";
import css from "./AreaChat.module.scss";
import TextEntry from "../TextEntry/TextEntry";
import ConversationArea from "../ConversationArea/ConversationArea";
import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";
import { addMessage } from "./utilities/addMessage";

interface AreaChatProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  getTitles: (questions: string, answer: string) => Promise<void>;
  conversations: Conversation[];
  activeConversationIndex:number
}

const AreaChat = ({ messages, setMessages,getTitles,conversations,activeConversationIndex}: AreaChatProps) => {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setMessages(conversations[activeConversationIndex]?.messages || []);
  }, [activeConversationIndex, conversations]);

  const handleSendMessage = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputMessage.trim()) return;
      setIsLoading(true);
      setInputMessage("");
      addMessage("user", inputMessage, setMessages);

      try {
        const response = await postQuestiontoOpenIA(inputMessage);
        addMessage("assistant", response.content, setMessages);
        if (messages.length === 0) {
          // This is the first message in a new conversation
          getTitles(inputMessage,response.content);
        }
      } catch (error) {
        console.error("Error al obtener la respuesta del asistente:", error);
      } finally {
        setIsLoading(false);
     
      }
    },
    [inputMessage, setMessages]
  );

  return (
    <div className={cn("w-3/4 h-screen h-full flex flex-col p-4 text-xl", css.Wrapper_chat)}>
      <ConversationArea messages={messages} setIsLoading={setIsLoading} />
      <TextEntry
        handleSendMessage={handleSendMessage}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AreaChat;
