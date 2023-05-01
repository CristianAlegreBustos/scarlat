import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";


const CodeMessage = ({ code, messageRole,language }: CodeMessage) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div
      className={`rounded ${
        messageRole === "user" ? "bg-blue-500" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center px-2 py-1">
        <span className="text-sm font-bold">{language}</span>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="focus:outline-none">
            {isCopied ? (
              <span className="text-sm">Copiado</span>
            ) : (
              <span className="text-sm">Copiar</span>
            )}
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter language="javascript" style={dark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeMessage;
