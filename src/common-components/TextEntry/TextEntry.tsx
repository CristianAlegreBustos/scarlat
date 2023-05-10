import React, { useState, useRef, useEffect } from "react";
import cn from "classnames"
import NormalButton from "../Buttons/NormalButton/NormalButton";
import IconButton from "../Buttons/IconButtons/IconButtons";
import { IconRecharge } from "../assets/IconRecharge";
import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";
import { updateNewConversations } from "../ConversationArea/utilities/updateNewConversations";
import css from "./TextEntry.module.scss"
import { AiOutlineSend } from "react-icons/ai";

const TextEntry = ({ handleSendMessage,inputMessage, setInputMessage, isLoading,setConversations,activeConversationIndex }: TextEntryProps) => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [rechargeLoading,setRechargeLoading]=useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputMessage]);

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCurrentQuestion(e.target.value);
    setInputMessage(e.target.value);
  };

  const recharge=async ()=>{
    setRechargeLoading(true)
    const response = await postQuestiontoOpenIA(
     currentQuestion,
      "Scarlet"
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
        <textarea
          ref={textareaRef}
          value={inputMessage}
          onChange={handleChange}
          className="w-full rounded py-2 px-4 bg-gray-900 text-xl resize-none"
          placeholder="Escribe tu pregunta..."
          style={{ maxHeight: '50vh' }}
        />
        <div className={css.Wrapper_buttons}>
          <IconButton icon={<IconRecharge/>} onClick={recharge} className={cn("cursor-pointer h-10 w-10",rechargeLoading && css.recharged)} />
          <NormalButton icon={<AiOutlineSend/>} isLoading={isLoading}/>
        </div>
      </form>
    </>
  );
};

export default TextEntry;
