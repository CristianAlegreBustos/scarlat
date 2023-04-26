import cn from "classnames";
import css from "./ConversationArea.module.scss";

const ConversationArea: React.FC<ConversationAreaProps> = ({ messages }) => {
  return (
    <div className={cn("flex-grow overflow-y-auto bg-gray-800 p-4 rounded", css.dialogue)}>
    {messages.map((message, index) => (
      <div
        key={index}
        className={`mb-2 rounded px-3 py-2 ${
          message.role === "user"
            ? "bg-blue-500 "
            : "bg-white text-black"
        }`}
      >
        {message.content.text}
      </div>
    ))}
  </div>
  );
};

export default ConversationArea;
