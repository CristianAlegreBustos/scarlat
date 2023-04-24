import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import css from "./scarlatChatPage.module.scss";
import HistoryQuestions from "@/common-components/HistoryQuestions/HistoryQuestions";
import AreaChat from "@/common-components/AreaChat/AreaChat";


export default function ScarlatChatPage() {
 


  return (
    <>
      <h1>Scarlat</h1>
      <div className="w-full h-screen flex">
        {/* Columna izquierda con las preguntas */}
        <HistoryQuestions></HistoryQuestions>

        {/* Área de chat */}
       <AreaChat/>
      </div>
    </>
  );
}
