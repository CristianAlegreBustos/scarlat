import { useState } from "react";
import cn from "classnames";
import css from "./AreaChat.module.scss";
import TextEntry from "../TextEntry/TextEntry";
import ConversationArea from "../ConversationArea/ConversationArea";
import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";

const AreaChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    setIsLoading(true);
    // Agrega el mensaje del usuario a la ventana de conversación
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: 'user',
        content: {
          text: inputMessage,
        },
      },
    ]);
  
    const response = await postQuestiontoOpenIA(inputMessage);
  
    // Agrega la respuesta del servidor a la ventana de conversación
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: 'assistant',
        content: {
          text: response.content,
        },
      },
    ]);
    setIsLoading(false);
    setInputMessage('');
  };
  

  return (
    <div className={cn("w-3/4 h-screen h-full flex flex-col p-4 text-xl", css.Wrapper_chat)}>
      <ConversationArea messages={messages} />
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
