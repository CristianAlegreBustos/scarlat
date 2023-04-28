import cn from "classnames";
import css from "./ConversationArea.module.scss";

const ConversationArea: React.FC<ConversationAreaProps> = ({ messages }) => {
  return (
    <div className={cn("relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)] text-xl", css.dialogue)}>
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