import { useEffect, useRef, useState } from "react";

export default function ScarlatChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string; }[]>([]);
  const chatLogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatLogRef.current !== null) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  });

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const messageText =(e.target as HTMLFormElement).message.value;
    const newMessage = {
      role: "user",
      content: `${messageText}`,
    };
    setMessages([...messages, newMessage]);
    (e.target as HTMLFormElement).message.value = "";

    const res = await fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        messages,
      }),
    });

    const data = await res.json();

    let newAssistantMessage = {
      role: "assistant",
      content: `${data.completion.content}`,
    };
    setMessages([...messages, newAssistantMessage]);

    
  };

  return (
    <>
      <h1>ChatGPT4 API</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" id="message" />
        <button type="submit">Enviar</button>
      </form>
      <div id="chat-log" ref={chatLogRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message message--${message.role === "user" ? "sent" : "received"}`}
          >
            <div className="message__text">{message.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}
