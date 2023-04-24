import isTextMessage from "@/utilities/isTextMessage";
import { useState } from "react";

const AreaChat = () => {

  const [messages, setMessages] = useState<
    ({ role: string; content: object } | { text: string; fromUser: boolean })[]
  >([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, fromUser: true }]);
      setInputMessage("");
    }
  };

  return (
    <div className="w-3/4 h-full flex flex-col p-4">
      {/* Ventana de mensajes */}
      <div className="flex-grow overflow-y-auto bg-gray-800 p-4 rounded">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 rounded px-3 py-2 ${
              isTextMessage(message) && message.fromUser
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {isTextMessage(message) ? message.text : ""}
          </div>
        ))}
      </div>

      {/* Entrada de texto */}
      <form onSubmit={handleSendMessage} className="flex mt-4">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="w-full rounded py-2 px-4 bg-gray-900 text-white"
          placeholder="Escribe tu pregunta..."
        />
        <button
          className="ml-4 bg-red-metallic rounded py-2 px-4 text-white"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AreaChat
