function isCodeMessage(text:string) {
    const codeRegex = /```(?:\w*\n)?([\s\S]*?)```/;
    return codeRegex.test(text);
  }
  
  function extractCodeContent(text: string) {
    const blocks = [];
    const codeRegex = /```(?:\S+)?([\s\S]*?)```/gm;
  
    let lastIndex = 0;
    let codeMatch;
  
    while ((codeMatch = codeRegex.exec(text)) !== null) {
      if (codeMatch.index > lastIndex) {
        blocks.push({
          type: "text",
          content: text.slice(lastIndex, codeMatch.index),
        });
      }
  
      blocks.push({
        type: "code",
        content: codeMatch[1],
      });
  
      lastIndex = codeRegex.lastIndex;
    }
  
    if (lastIndex < text.length) {
      blocks.push({
        type: "text",
        content: text.slice(lastIndex),
      });
    }
  
    return blocks;
  }
  


  export {isCodeMessage,extractCodeContent}