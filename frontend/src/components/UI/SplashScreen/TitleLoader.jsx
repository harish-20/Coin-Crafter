import { useEffect, useState } from "react";

const TitleLoader = (props) => {
  const { title } = props;

  const [noOfLettersVisible, setNoOfLettersVisible] = useState(1);

  useEffect(() => {
    const increseLetters = () => {
      setNoOfLettersVisible((prev) => prev + 1);
    };

    if (noOfLettersVisible >= title.length) return;
    const interval = setInterval(increseLetters, 300);

    return () => {
      clearInterval(interval);
    };
  }, [noOfLettersVisible]);

  const titleLetters = title.split("");
  const lettersToBeShown = titleLetters.slice(0, noOfLettersVisible);

  return (
    <div className="flex gap-[0.7px]">
      {lettersToBeShown.map((letter, index) => (
        <span
          className="whitespace-pre fade-in text-2xl font-medium"
          key={index}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};
export default TitleLoader;
