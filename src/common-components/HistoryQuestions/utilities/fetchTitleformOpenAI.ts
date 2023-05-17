import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";

  const generateTitleRequestMessage = async (
    question: string,
    answer: string,
  ) => {
    const titleResult = await postQuestiontoOpenIA(
      `Provide a title for the text delimited by double double quotation marks. Use max 36 characteres: "${question}", "${answer}"`,""
    );
    return titleResult;
  };

const fetchTitleformOpenAI = async (question:string, answer:string) => {
    const title =  generateTitleRequestMessage(question,answer);
    return title;
  };

export {fetchTitleformOpenAI} 