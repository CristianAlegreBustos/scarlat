import { useState } from "react";
import cn from "classnames";
import css from "./AreaChat.module.scss";
import TextEntry from "../TextEntry/TextEntry";
import ConversationArea from "../ConversationArea/ConversationArea";
import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";

const AreaChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;


    const response = await postQuestiontoOpenIA(inputMessage);

    setMessages([
      ...messages,
      {
        role: 'user',
        content: {
          text: inputMessage,
        },
      },
      {
        role: 'assistant',
        content: {
          text: response.content,
        },
      },
    ]);
    setInputMessage('');
  };

  return (
    <div className={cn("w-3/4 h-full flex flex-col p-4", css.Wrapper_chat)}>
      <ConversationArea messages={messages} />
      <TextEntry
        handleSendMessage={handleSendMessage}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
      />
    </div>
  );
};

export default AreaChat;
