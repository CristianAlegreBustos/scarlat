// DisplayTextWithLineBreaks.tsx
import React, { useMemo } from "react";
import useAnimatedText from "../../utilities/useAnimatedText";

const DisplayTextWithLineBreaks: React.FC<DisplayTextWithLineBreaksProps> = ({
  text,
  animationSpeed,
}) => {
  let displayText:string
  if (animationSpeed) {
     displayText = useAnimatedText(text, animationSpeed);
  }else{
    displayText = text
  }

  const displayTextWithLineBreaks = useMemo(
    () =>
      displayText.split("\n").map((line: string, index: number) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      )),
    [displayText]
  );

  return <>{displayTextWithLineBreaks}</>;
};

export default DisplayTextWithLineBreaks;
