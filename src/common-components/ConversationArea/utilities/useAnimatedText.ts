import { useEffect, useState } from 'react';

const useAnimatedText = (text: string, animationSpeed: number) => {
    const [displayText, setDisplayText] = useState<string>('');
  
    useEffect(() => {
      setDisplayText('');
      let index = 0;
  
      // Agregar letras al texto de la pantalla con un intervalo de tiempo
      const interval = setInterval(() => {
        if (index < text.length) {
          const newText = text.slice(0, index + 1); // Aquí cambiamos la forma en que se genera newText
          setDisplayText(newText); // Ya no usamos prevText
          index++;
        } else {
          clearInterval(interval);
        }
      }, animationSpeed);
  
      return () => clearInterval(interval);
    }, [text, animationSpeed]);
  
    return displayText;
  };
  

export default useAnimatedText;
