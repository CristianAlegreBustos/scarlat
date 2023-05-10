import React, { useMemo } from "react";
import useAnimatedText from "../../utilities/useAnimatedText";

const DisplayTextWithLineBreaks: React.FC<DisplayTextWithLineBreaksProps> = ({
  text,
  animationSpeed,
}) => {
  let displayText: string;
  if (animationSpeed) {
    displayText = useAnimatedText(text, animationSpeed);
  } else {
    displayText = text;
  }

  const displayTextWithLineBreaks = useMemo(() => {
    // Utiliza una expresión regular para capturar diferentes tipos de saltos de línea
    const lineBreakRegex = /\r\n|\n|\r/gm;
    const lines = displayText.split(lineBreakRegex);

    // Filtra las líneas vacías antes de generar los elementos de React
    const nonEmptyLines = lines.filter((line) => line.trim() !== "");

    return nonEmptyLines.map((line: string, index: number) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }, [displayText]);

  return <>{displayTextWithLineBreaks}</>;
};

export default DisplayTextWithLineBreaks;
