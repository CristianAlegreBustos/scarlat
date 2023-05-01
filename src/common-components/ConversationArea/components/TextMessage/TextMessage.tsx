const TextMessage = ({ text, messageRole}: TextMessage) => {
  return (
    <div
      className={`mb-2 rounded px-3 py-2 ${
        messageRole === "user" ? "bg-blue-500" : "bg-white text-black"
      }`}
    >
      {text}
    </div>
  );
};

export default TextMessage;
