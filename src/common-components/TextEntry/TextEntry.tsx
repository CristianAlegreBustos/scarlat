import React, { useState } from "react";
import cn from "classnames"
import NormalButton from "../Buttons/NormalButton/NormalButton";
import IconButton from "../Buttons/IconButtons/IconButtons";
import { IconRecharge } from "../assets/IconRecharge";
import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";
import { updateNewConversations } from "../ConversationArea/utilities/updateNewConversations";
import css from "./TextEntry.module.scss"

const TextEntry = ({ handleSendMessage,inputMessage, setInputMessage, isLoading,setConversations,activeConversationIndex }: TextEntryProps) => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [rechargeLoading,setRechargeLoading]=useState(false)
const recharge=async ()=>{
  setRechargeLoading(true)
  const response = await postQuestiontoOpenIA(
   currentQuestion,
    "personal_pay"
  );
  updateNewConversations({
    action: "addRechargedAssistantMessage",
    setConversations,
    conversationIndex:activeConversationIndex,
    message:response.content
  });
  setRechargeLoading(false)
}
  return (
    <>
      <form onSubmit={handleSendMessage} className="flex mt-4">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => {
            setCurrentQuestion(e.target.value);
            setInputMessage(e.target.value);
          }}
          className="w-full rounded py-2 px-4 bg-gray-900 h-10 text-xl"
          placeholder="Escribe tu pregunta..."
        />
        <div className="flex">
         <IconButton icon={<IconRecharge/>} onClick={recharge} className={cn("cursor-pointer h-9 w-9",rechargeLoading && css.recharged)} />
        <NormalButton text={"Enviar"} isLoading={isLoading}/>
        </div>
      </form>
    </>
  );
};

export default TextEntry;
