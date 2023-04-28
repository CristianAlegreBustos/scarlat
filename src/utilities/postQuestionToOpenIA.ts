const postQuestiontoOpenIA = async (inputMessage:string) => {
  try {
    const response = await fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: inputMessage,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.completion;
  } catch (error) {
    console.error(error);
  }
};

export default postQuestiontoOpenIA;
