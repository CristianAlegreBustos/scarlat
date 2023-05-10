import React, { useCallback, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import useAnimatedText from "../../utilities/useAnimatedText";
import { MdContentCopy } from "react-icons/md";

const CodeMessage = ({ code, messageRole, language }: CodeMessage) => {
  const [isCopied, setIsCopied] = useState(false);
  let codeMessage = useAnimatedText(code, 50);
  const handleCopy = useCallback(() => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  }, []);

  return (
    <div
      className={`rounded ${
        messageRole === "user" ? "bg-blue-500" : "bg-white text-black"
      }`}
    >
      <div className="flex-column rounded  justify-between items-center px-2 py-1 bg-orange-200 mt-2 mb-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold ">{language}</span>
          <CopyToClipboard text={code} onCopy={handleCopy}>
            <button className="focus:outline-none m-2">
              {isCopied ? (
                <span className="text-sm">Copiado</span>
              ) : (
                <div className="flex gap-2">
                  <MdContentCopy />
                  <span className="text-sm">Copiar</span>
                </div>
              )}
            </button>
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter language="javascript" style={dark}>
          {codeMessage}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeMessage;
