import { useEffect, useState } from "react";
import cn from "classnames";
import css from "./scarlatChatPage.module.scss";
import HistoryQuestions from "@/common-components/HistoryQuestions/HistoryQuestions";
import AreaChat from "@/common-components/AreaChat/AreaChat";
import { fetchTitleformOpenAI } from "@/common-components/HistoryQuestions/utilities/fetchTitleformOpenAI";
import { NewChatButton } from "@/common-components/HistoryQuestions/components/NewChatButton/NewChatButton";
import Navbar from "@/common-components/Navbar/Navbar";
import IconButton from "@/common-components/Buttons/IconButtons/IconButtons";
import { IconDelete } from "@/common-components/assets/IconDelete";

export default function ScarlatChatPage() {
  const [showHistory, setShowHistory] = useState(false);
  const [conversations, setConversations] = useState<
    { title: string; messages: Message[] }[]
  >([]);
  const [activeConversationIndex, setActiveConversationIndex] =
    useState<number>(0);

  const handleFirstUserMessage = async (questions: string, answer: string) => {
    const response = await fetchTitleformOpenAI(questions, answer);
    const title=response.content
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
      prevConversations.map((conv, i) =>
        i === index ? { ...conv, title: newTitle } : conv
      )
    );
  };
  const handleHamburgerClick = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className={cn("w-full h-screen h-full flex", css.root)}>
      <div
        className={cn(
          "lg:block lg:static lg:w-1/4 w-3/4 fixed pl-4 py-4 bg-slate-900 fixed h-full z-999",
          {
            hidden: !showHistory,
          }
        )}
      >
        <div className="flex justify-between mb-10">
          <NewChatButton onClick={addNewChat} />
          <IconButton className="lg:invisible" icon={<IconDelete />} onClick={handleHamburgerClick} />
        </div>
        <HistoryQuestions
          conversations={conversations}
          setActiveConversationIndex={setActiveConversationIndex}
          onDeleteConversation={deleteConversation}
          onEditConversationTitle={editConversationTitle}
        />
      </div>
      <div className="w-full ">
        <Navbar
          onClickNewChat={addNewChat}
          activeConversationTitle={
            conversations[activeConversationIndex]?.title
          }
          onHamburgerClick={handleHamburgerClick}
        />
        <AreaChat
          getTitles={handleFirstUserMessage}
          conversations={conversations}
          activeConversationIndex={activeConversationIndex}
          setConversations={setConversations}
        />
      </div>
    </div>
  );
}
