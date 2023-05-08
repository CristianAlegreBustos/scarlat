import React from "react";
import NormalButton from "../Buttons/NormalButton/NormalButton";


interface TextEntryProps {
  handleSendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  inputMessage: string;
  setInputMessage: React.Dispatch<React.SetStateAction<string>>;
  isLoading:boolean;
}

const TextEntry = ({ handleSendMessage, inputMessage, setInputMessage,isLoading }: TextEntryProps) => {
  return (
    <>
      {/* Entrada de texto */}
      <form onSubmit={handleSendMessage} className="flex mt-4">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="w-full rounded py-2 px-4 bg-gray-900 h-10 text-xl"
          placeholder="Escribe tu pregunta..."
        />
        <NormalButton text={"Enviar"} isLoading={isLoading}/>
      </form>
    </>
  );
};

export default TextEntry;
