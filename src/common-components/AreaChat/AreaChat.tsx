import { useState, useCallback } from "react";
import cn from "classnames";
import css from "./AreaChat.module.scss";
import TextEntry from "../TextEntry/TextEntry";
import ConversationArea from "../ConversationArea/ConversationArea";
import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";
import { addMessage } from "./utilities/addMessage";

interface AreaChatProps {
  getTitles: (questions: string, answer: string) => Promise<void>;
}

const AreaChat = ({ getTitles }: AreaChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);


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
      } catch (error) {
        console.error("Error al obtener la respuesta del asistente:", error);
      } finally {
        
      }
    },
    [inputMessage]
  );

  return (
    <div className={cn("w-3/4 h-screen h-full flex flex-col p-4 text-xl", css.Wrapper_chat)}>
      <ConversationArea messages={messages}  setIsLoading={setIsLoading}  />
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
