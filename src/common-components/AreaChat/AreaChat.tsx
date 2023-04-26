import { useState } from "react";
import cn from "classnames";
import css from "./AreaChat.module.scss"
import TextEntry from "../TextEntry/TextEntry";
import ConversationArea from "../ConversationArea/ConversationArea";

const AreaChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        {
          role: 'user',
          content: {
            text: inputMessage,
          },
        },
      ]);
      setInputMessage('');
    }
  };
  

  return (
    <div className={cn("w-3/4 h-full flex flex-col p-4",css.Wrapper_chat)}>
      <ConversationArea messages={messages}/>
      <TextEntry
      handleSendMessage={handleSendMessage}
      inputMessage={inputMessage}
      setInputMessage={setInputMessage}/>
    </div>
  );
};

export default AreaChat
