import cn from "classnames";
import css from "./ConversationArea.module.scss";
import { extractCodeContent, isCodeMessage } from "@/utilities/verifyCode";
import CodeMessage from "./components/CodeMessage/CodeMessage";
import TextMessage from "./components/TextMessage/TextMessage";
import hljs from 'highlight.js';

const ConversationArea: React.FC<ConversationAreaProps> = ({ messages }) => {
  console.log(messages);

  const detectLanguage = (code:string) => {
    return hljs.highlightAuto(code).language || "plaintext";
  };

  return (
    <div
      className={cn(
        "relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)] text-xl",
        css.dialogue
      )}
    >
      {messages.map((message, index) => {
        const isCode = isCodeMessage(message.content.text);
        const { code, textBeforeCode, textAfterCode } = extractCodeContent(
          message.content.text
        );

        return (
          <>
            {textBeforeCode && (
              <TextMessage
                key={`TextBeforeCode-${index}`}
                text={textBeforeCode}
                messageRole={message.role}
              />
            )}
            {isCode && (
              <CodeMessage
                key={`TextCode-${index}`}
                code={code}
                language={detectLanguage(code)}
                messageRole={message.role}
              />
            )}
            {textAfterCode && (
              <TextMessage
                key={`TextAfterCode-${index}`}
                text={textAfterCode}
                messageRole={message.role}
              />
            )}
            {!isCode && (
              <TextMessage
                key={`TextOnly-${index}`}
                text={message.content.text}
                messageRole={message.role}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default ConversationArea;
