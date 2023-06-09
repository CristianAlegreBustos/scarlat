import React, { useEffect, useMemo, useState } from "react";
import cn from "classnames"
import css from "./TextMessage.module.scss"
import { IconEdit } from "@/common-components/assets/IconEdit";
import NormalButton from "@/common-components/Buttons/NormalButton/NormalButton";
import IconButton from "@/common-components/Buttons/IconButtons/IconButtons";
import DisplayTextWithLineBreaks from "../TextWithLineBreaks/TextWithLineBreaks";
import { updateEditedConversation } from "../../utilities/updateEditedConversation";

const TextMessage = ({
  index,
  initialText,
  messageRole,
  setConversations,
  activeConversationIndex,
}: TextMessage) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const animationSpeed = 50; // Ajustar este valor para controlar la velocidad de la animación

  const handleSave = async (newText: string) => {
    setText(newText);
    setIsEditing(false);
  
    if (
      typeof index === "number" &&
      typeof activeConversationIndex === "number" &&
      setConversations &&
      messageRole === "user"
    ) {
      updateEditedConversation(
        newText,
        index,
        activeConversationIndex,
        setConversations 
      );
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const toggleEditing = () => {
    if (messageRole === "user") {
      setIsEditing(!isEditing);
    }
  };

  const messageClassName = `rounded px-3 py-2 static ${
    messageRole === "user" ? "bg-blue-500 mb-2 " : "bg-white text-black"
  }`;

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  return (
    <div className={messageClassName}>
      {isEditing ? (
        <div className="flex-column justify-between">
          <textarea
            className={"w-full bg-blue-500"}
            value={text}
            onChange={handleTextChange}
          />
          <div className={cn("flex justify-center",css.Wrapper_buttons)}>
            <NormalButton
              text={"Guardar & Enviar"}
              onClick={() => handleSave(text)}
            />
            <NormalButton text={"Cancelar"} onClick={toggleEditing} />
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          {messageRole === "user" ? (
            <DisplayTextWithLineBreaks
            text={text}
          />
          ) : (
            <DisplayTextWithLineBreaks
              text={text}
              animationSpeed={animationSpeed}
            />
          )}
          {messageRole === "user" && (
            <IconButton className="cursor-pointer" icon={<IconEdit />} onClick={toggleEditing} />
          )}
        </div>
      )}
    </div>
  );
};

export default TextMessage;
