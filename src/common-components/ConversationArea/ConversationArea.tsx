import cn from "classnames";
import css from "./ConversationArea.module.scss";
import { extractCodeContent, isCodeMessage } from "@/utilities/verifyCode";
import CodeMessage from "./components/CodeMessage/CodeMessage";
import TextMessage from "./components/TextMessage/TextMessage";
import { detectLanguage } from "./utilities/detectLanguage";

const ConversationArea: React.FC<ConversationAreaProps> = ({
  messages,
  setIsLoading,
  setConversations,
  activeConversationIndex,
}) => {
  return (
    <div
      className={cn(
        "flex-grow overflow-y-auto bg-gray-800 p-4 rounded text-xl",
        css.dialogue
      )}
    >
      {
  messages.map((message, index) => {
    const blocks = extractCodeContent(message.content.text);

    return blocks.map((block, blockIndex) => {
      if (block.type === "code") {
        return (
          <CodeMessage
            key={`TextCode-${index}-${blockIndex}`}
            code={block.content}
            language={detectLanguage(block.content)}
            messageRole={message.role}
          />
        );
      } else {
        return (
          <TextMessage
            key={`TextOnly-${index}-${blockIndex}`}
            index={index}
            initialText={block.content}
            messageRole={message.role}
            setIsLoading={setIsLoading}
            setConversations={setConversations}
            activeConversationIndex={activeConversationIndex}
          />
        );
      }
    });
  })
}

    </div>
  );
};

export default ConversationArea;
