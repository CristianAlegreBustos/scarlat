import postQuestiontoOpenIA from "@/utilities/postQuestionToOpenIA";

  const generateTitleRequestMessage = async (
    question: string,
    answer: string,
  ) => {
    const titleResult = await postQuestiontoOpenIA(
      `Por favor, sugiere un título adecuado para el tema de esta conversación, teniendo en cuenta la pregunta y la respuesta proporcionadas. La pregunta es: "${question}", y la respuesta es: "${answer}". Por favor, proporcione el título en el mismo idioma en que se hizo la pregunta.
      Solo devuelve el titulo`,"language_detection"
    );
    return titleResult;
  };

const fetchTitleformOpenAI = async (question:string, answer:string) => {
    const title =  generateTitleRequestMessage(question,answer);
    return title;
  };

export {fetchTitleformOpenAI} 