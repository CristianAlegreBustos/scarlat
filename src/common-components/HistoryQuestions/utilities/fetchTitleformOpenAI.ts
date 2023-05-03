import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";

const detectedLanguage = async (firstMessage: string) => {
    const languageResult = await postQuestiontoOpenIA(
      `What is the language of the following text? ${firstMessage}`
    );
    return languageResult;
  };

  const generateTitleRequestMessage = async (
    question: string,
    answer: string,
    language: string
  ) => {
    const titleResult = await postQuestiontoOpenIA(
      `¿Que titulo le pondrias al tema de esta conversacion? Solo devuelve el nombre del titulo en el siguiente idioma: ${language}. Question : ${question} Answer : ${answer} `
    );
    return titleResult;
  };

const fetchTitleformOpenAI = async (question:string, answer:string) => {
    const language = await detectedLanguage(question)
    // Extrae y devuelve el título de la respuesta de ChatGPT
    const title =  generateTitleRequestMessage(question,answer,language);
    return title;
  };

export {fetchTitleformOpenAI} 