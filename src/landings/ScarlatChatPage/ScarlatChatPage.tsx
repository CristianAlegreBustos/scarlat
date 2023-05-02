import { useState } from "react";
import cn from "classnames";
import css from "./scarlatChatPage.module.scss";
import HistoryQuestions from "@/common-components/HistoryQuestions/HistoryQuestions";
import AreaChat from "@/common-components/AreaChat/AreaChat";
import { fetchTitleformOpenAI } from "@/common-components/HistoryQuestions/utilities/fetchTitleformOpenAI";

export default function ScarlatChatPage() {
  const [titles, setTitles] = useState<string[]>([]);

  const handleFirstUserMessage = async (questions:string,answer:string) => {
    const title = await fetchTitleformOpenAI(questions,answer)
    setTitles(title)
  }

  return (
      <div className={cn("w-full h-screen h-full flex",css.root)} >
        <HistoryQuestions Titles={titles}/>
        <AreaChat getTitles={handleFirstUserMessage}/>
      </div>
  );
}
