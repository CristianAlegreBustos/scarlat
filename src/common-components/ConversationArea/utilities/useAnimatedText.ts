// useAnimatedText.tsx
import { useEffect, useState} from 'react';

export const useAnimatedText = (text: string, animationSpeed: number) => {
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    setDisplayText('');
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        const newText = text.slice(0, index + 1);
        setDisplayText(newText);
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
