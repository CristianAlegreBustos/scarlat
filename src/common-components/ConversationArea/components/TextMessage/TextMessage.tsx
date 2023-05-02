import React from 'react';
import useAnimatedText from '../../utilities/useAnimatedText';


const TextMessage = ({ text, messageRole }: TextMessage) => {
  const animationSpeed = 50; // Ajustar este valor para controlar la velocidad de la animación
  const displayText = useAnimatedText(text, animationSpeed);

  return (
    <div
      className={`mb-2 rounded px-3 py-2 ${
        messageRole === "user" ? "bg-blue-500" : "bg-white text-black"
      }`}
    >
      { messageRole === "user" ? text : displayText}
    </div>
  );
};

export default TextMessage;
