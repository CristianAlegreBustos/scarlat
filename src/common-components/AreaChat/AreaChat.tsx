import { useState, useCallback, useEffect } from "react";
import cn from "classnames";
import css from "./AreaChat.module.scss";
import TextEntry from "../TextEntry/TextEntry";
import ConversationArea from "../ConversationArea/ConversationArea";
import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";

const AreaChat = ({
  getTitles,
  conversations,
  activeConversationIndex,
  setConversations,
}: AreaChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
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
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role:"user",
          content: {
            text:inputMessage,
          },
        },
      ]);
      try {
        const response = await postQuestiontoOpenIA(
          inputMessage,
          "personal_pay"
        );
        if (messages.length === 0) {
          // This is the first message in a new conversation
          getTitles(inputMessage, response.content);
        }else{
          setConversations((prevConversations) => {
            const newMessage = [...prevConversations];
            newMessage[activeConversationIndex].messages.push({
              role: "user",
              content: { text: inputMessage },
            });
            return newMessage;
          });
          setConversations((prevConversations) => {
            const newMessage = [...prevConversations];
            newMessage[activeConversationIndex].messages.push({
              role: "assistant",
              content: { text: response.content },
            });
            return newMessage;
          });
        }

      } catch (error) {
        console.error("Error al obtener la respuesta del asistente:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [inputMessage] 
  );

  return (
    <div
      className={cn(
        "w-3/4 h-screen h-full flex flex-col p-4 text-xl",
        css.Wrapper_chat
      )}
    >
      <ConversationArea
        messages={messages}
        setIsLoading={setIsLoading}
        setConversations={setConversations}
        activeConversationIndex={activeConversationIndex}
      />
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
