import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";

  const generateTitleRequestMessage = async (
    question: string,
    answer: string,
  ) => {
    const titleResult = await postQuestiontoOpenIA(
      `¿Que titulo le pondrias al tema de esta conversacion? Solo devuelve el nombre del titulo en el idioma en que se hace la pregunta. Question : ${question} Answer : ${answer} `,"language_detection"
    );
    return titleResult;
  };

const fetchTitleformOpenAI = async (question:string, answer:string) => {
    const title =  generateTitleRequestMessage(question,answer);
    return title;
  };

export {fetchTitleformOpenAI} 