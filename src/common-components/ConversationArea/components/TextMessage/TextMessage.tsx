import React, { useEffect, useMemo, useState } from "react";
import { IconEdit } from "@/common-components/HistoryQuestions/assets/IconEdit";
import NormalButton from "@/common-components/Buttons/NormalButton/NormalButton";
import IconButton from "@/common-components/Buttons/IconButtons/IconButtons";
import DisplayTextWithLineBreaks from "../TextWithLineBreaks/TextWithLineBreaks";
import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";

const TextMessage = ({
  index,
  initialText,
  messageRole,
  setIsLoading,
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
      const response = await postQuestiontoOpenIA(newText, "personal_pay");

      setConversations((prevConversations) => {
        const newMessage = [...prevConversations];
        const assistantMessageIndex = index + 1;

        // Actualizar el mensaje del usuario
        newMessage[activeConversationIndex].messages[index] = {
          role: "user",
          content: { text: newText },
        };

        // Verificar si existe un mensaje del asistente después del mensaje del usuario y actualizarlo
        if (
          newMessage[activeConversationIndex].messages[assistantMessageIndex]
            ?.role === "assistant"
        ) {
          newMessage[activeConversationIndex].messages[assistantMessageIndex] =
            {
              role: "assistant",
              content: { text: response.content },
            };
        } else {
          // Si no hay un mensaje del asistente después del mensaje del usuario, agregarlo
          newMessage[activeConversationIndex].messages.push({
            role: "assistant",
            content: { text: response.content },
          });
        }

        return newMessage;
      });
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

  const messageClassName = `mb-2 rounded px-3 py-2 relative ${
    messageRole === "user" ? "bg-blue-500" : "bg-white text-black"
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
          <div className="flex justify-center">
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
            <div>{text}</div>
          ) : (
            <DisplayTextWithLineBreaks
              text={text}
              animationSpeed={animationSpeed}
            />
          )}
          {messageRole === "user" && (
            <IconButton icon={<IconEdit />} onClick={toggleEditing} />
          )}
        </div>
      )}
    </div>
  );
};

export default TextMessage;
