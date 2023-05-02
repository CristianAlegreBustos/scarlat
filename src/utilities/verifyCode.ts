function isCodeMessage(text:string) {
    const codeRegex = /```(?:\w*\n)?([\s\S]*?)```/;
    return codeRegex.test(text);
  }
  
  function extractCodeContent(text: string) {
    const codeRegex = /```(?:\S+)?([\s\S]*?)```/gm;
    const codeMatch = codeRegex.exec(text);
  
    if (codeMatch) {
      return {
        textBeforeCode: codeMatch.index > 0 ? text.slice(0, codeMatch.index) : '',
        code: codeMatch[1],
        textAfterCode: codeMatch.index + codeMatch[0].length < text.length ? text.slice(codeMatch.index + codeMatch[0].length) : '',
      };
    }
  
    return {
      textBeforeCode: '',
      code: '',
      textAfterCode: '',
    };
  }


  export {isCodeMessage,extractCodeContent}