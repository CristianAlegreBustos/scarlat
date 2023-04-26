import SendButton from "../SendButton/SendButton";
import React from "react";

interface TextEntryProps {
  handleSendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  inputMessage: string;
  setInputMessage: React.Dispatch<React.SetStateAction<string>>;
}

const TextEntry = ({ handleSendMessage, inputMessage, setInputMessage }: TextEntryProps) => {
  return (
    <>
      {/* Entrada de texto */}
      <form onSubmit={handleSendMessage} className="flex mt-4">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="w-full rounded py-2 px-4 bg-gray-900"
          placeholder="Escribe tu pregunta..."
        />
        <SendButton />
      </form>
    </>
  );
};

export default TextEntry;
