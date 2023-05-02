
  
export const addMessage = (
    role: "user" | "assistant",
    text: string,
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  ) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role,
        content: {
          text,
        },
      },
    ]);
  };
  