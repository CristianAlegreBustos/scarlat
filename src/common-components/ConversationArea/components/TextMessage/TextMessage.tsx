import React, { useEffect } from 'react';
import useAnimatedText from '../../utilities/useAnimatedText';

const TextMessage = ({ text, messageRole, setIsLoading }: TextMessage) => {
  const animationSpeed = 50; // Ajustar este valor para controlar la velocidad de la animación
  const displayText = useAnimatedText(text, animationSpeed);
  const displayTextWithLineBreaks = displayText.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  useEffect(() => {
    if (messageRole === "assistant") {
      setIsLoading(false);
    }
  }, [messageRole, setIsLoading]);

  return (
    <div
      className={`mb-2 rounded px-3 py-2 ${
        messageRole === "user" ? "bg-blue-500" : "bg-white text-black"
      }`}
    >
      {messageRole === "user" ? text : displayTextWithLineBreaks}
    </div>
  );
};

export default TextMessage;
