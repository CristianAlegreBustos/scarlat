const postQuestiontoOpenIA = async (inputMessage: string,url:string) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: {
                text: inputMessage,
              },
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
export default postQuestiontoOpenIA 