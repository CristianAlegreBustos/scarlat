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
      {messages.map((message, index) => {
        const isCode = isCodeMessage(message.content.text);
        const extractedContent = extractCodeContent(message.content.text);
        const { code, textBeforeCode, textAfterCode } = extractedContent;

        if (isCode) {
          return (
            <div key={index}>
              {textBeforeCode && (
                <TextMessage
                  key={`TextBeforeCode-${index}`}
                  initialText={textBeforeCode}
                  messageRole={message.role}
                  setIsLoading={setIsLoading}
                />
              )}
              <CodeMessage
                key={`TextCode-${index}`}
                code={code}
                language={detectLanguage(code)}
                messageRole={message.role}
              />
              {textAfterCode && (
                <TextMessage
                  key={`TextAfterCode-${index}`}
                  initialText={textAfterCode}
                  messageRole={message.role}
                  setIsLoading={setIsLoading}
                />
              )}
            </div>
          );
        } else {
          return (
            <TextMessage
              key={`TextOnly-${index}`}
              index={index}
              initialText={message.content.text}
              messageRole={message.role}
              setIsLoading={setIsLoading}
              setConversations={setConversations}
              activeConversationIndex={activeConversationIndex}
            />
          );
        }
      })}
    </div>
  );
};

export default ConversationArea;
