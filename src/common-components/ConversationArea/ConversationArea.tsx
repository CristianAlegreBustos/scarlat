import { useEffect, useState } from "react";
import cn from "classnames";
import css from "./ConversationArea.module.scss";
import { extractCodeContent, isCodeMessage } from "@/utilities/verifyCode";
import CodeMessage from "./components/CodeMessage/CodeMessage";
import TextMessage from "./components/TextMessage/TextMessage";
import { detectLanguage } from "./utilities/detectLanguage";

const ConversationArea: React.FC<ConversationAreaProps> = ({ messages,setIsLoading }) => {
  return (
    <div
      className={cn(
        "relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)] text-xl",
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
            text={textBeforeCode}
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
        {textAfterCode &&  (
          <TextMessage
            key={`TextAfterCode-${index}`}
            text={textAfterCode}
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
        text={message.content.text}
        messageRole={message.role}
        setIsLoading={setIsLoading}
      />
    );
  }
})}

    </div>
  );
};

export default ConversationArea;
