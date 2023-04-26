import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import css from "./scarlatChatPage.module.scss";
import HistoryQuestions from "@/common-components/HistoryQuestions/HistoryQuestions";
import AreaChat from "@/common-components/AreaChat/AreaChat";

export default function ScarlatChatPage() {
  return (
      <div className={cn("w-full h-screen flex",css.root)} >
        <HistoryQuestions/>
        <AreaChat />
      </div>

  );
}
