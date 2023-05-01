function isCodeMessage(text:string) {
    console.log("is code")
    const codeRegex = /```(?:\w*\n)?([\s\S]*?)```/;
    return codeRegex.test(text);
  }
  
  const extractCodeContent = (text: string) => {
    const codeRegex = /```([\s\S]*?)```/;
    const codeMatch = text.match(codeRegex);
    const codeContent = codeMatch ? codeMatch[1].trim() : '';
  
    const textBeforeCode = codeMatch ? text.slice(0, codeMatch.index!).trim() : '';
    const textAfterCode = codeMatch ? text.slice(codeMatch.index! + codeMatch[0].length).trim() : '';
  
    return {
      code: codeContent,
      textBeforeCode: textBeforeCode,
      textAfterCode: textAfterCode,
    };
  };
  
  

  export {isCodeMessage,extractCodeContent}