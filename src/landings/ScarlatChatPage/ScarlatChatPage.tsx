import {useEffect, useState } from "react";
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

  const addNewChat = () => {
    setActiveConversationIndex(conversations.length);
  };

  const deleteConversation = (index: number) => {
    setConversations((prevConversations) =>
      prevConversations.filter((_, i) => i !== index)
    );
  };

  const editConversationTitle = (index: number, newTitle: string) => {
    setConversations((prevConversations) =>
      prevConversations.map((conv, i) => (i === index ? { ...conv, title: newTitle } : conv))
    );
  };

  useEffect(()=>{
    console.log(conversations)
  },[conversations])
  return (
    <div className={cn("w-full h-screen h-full flex", css.root)}>
      <div className={cn("w-1/4 pl-4 py-4", css.wrapper_questions)}>
        <NewChatButton onClick={addNewChat} />
        <HistoryQuestions
          conversations={conversations}
          setActiveConversationIndex={setActiveConversationIndex}
          onDeleteConversation={deleteConversation} 
          onEditConversationTitle={editConversationTitle} 
        />
      </div>
      <AreaChat
        getTitles={handleFirstUserMessage}
        conversations={conversations}
        activeConversationIndex={activeConversationIndex}
        setConversations={setConversations} 
      />
    </div>
  );
}
