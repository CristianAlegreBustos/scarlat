import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";

export const updateEditedConversation = async (newText: string,index:number,activeConversationIndex:number, setConversations: (arg: (prevConversations: Conversation[]) => Conversation[]) => void) => {
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
        newMessage[activeConversationIndex].messages[assistantMessageIndex] = {
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
  };  