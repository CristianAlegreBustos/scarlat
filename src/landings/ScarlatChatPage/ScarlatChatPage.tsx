import { useEffect, useState } from "react";
import cn from "classnames";
import css from "./scarlatChatPage.module.scss";
import HistoryQuestions from "@/common-components/HistoryQuestions/HistoryQuestions";
import AreaChat from "@/common-components/AreaChat/AreaChat";
import { fetchTitleformOpenAI } from "@/common-components/HistoryQuestions/utilities/fetchTitleformOpenAI";
import { NewChatButton } from "@/common-components/HistoryQuestions/components/NewChatButton/NewChatButton";

export default function ScarlatChatPage() {
  const [conversations, setConversations] = useState<
    { title: string; messages: Message[] }[]
  >([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeConversationIndex, setActiveConversationIndex] =
    useState<number>(0);

  const handleFirstUserMessage = async (questions: string, answer: string) => {
    const title = await fetchTitleformOpenAI(questions, answer);
    setConversations((prevConversations) => [
      ...prevConversations,
      {
        title,
        messages: [
          { role: "user", content: { text: questions } },
          { role: "assistant", content: { text: answer } },
        ],
      },
    ]);
  };

  const handleAddNewChat = () => {
    setActiveConversationIndex(conversations.length);
  };

  const handleDeleteConversation = (index: number) => {
    setConversations((prevConversations) =>
      prevConversations.filter((_, i) => i !== index)
    );
  };

  const handleEditConversationTitle = (index: number, newTitle: string) => {
    setConversations((prevConversations) =>
      prevConversations.map((conv, i) => (i === index ? { ...conv, title: newTitle } : conv))
    );
  };

  return (
    <div className={cn("w-full h-screen h-full flex", css.root)}>
      <div className={cn("w-1/4 pl-4 py-4", css.wrapper_questions)}>
        <NewChatButton onClick={handleAddNewChat} />
        <HistoryQuestions
          conversations={conversations}
          setActiveConversationIndex={setActiveConversationIndex}
          onDeleteConversation={handleDeleteConversation} 
          onEditConversationTitle={handleEditConversationTitle} 
        />
      </div>
      <AreaChat
        messages={messages}
        setMessages={setMessages}
        getTitles={handleFirstUserMessage}
        conversations={conversations}
        activeConversationIndex={activeConversationIndex} // Agrega esta línea
      />
    </div>
  );
}
