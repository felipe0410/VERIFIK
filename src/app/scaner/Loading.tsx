import { useLottie } from "lottie-react";
import scan from "../../../public/animation/scan.json";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const Loading = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Scanning data....";
  const options = {
    animationData: scan,
    loop: true,
  };
  const { View } = useLottie(options);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(displayedText + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        setDisplayedText("");
        setCurrentIndex(0);
      }
    }, 200); // Ajusta el intervalo de tiempo aquí (en milisegundos).

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, displayedText]);
  return (
    <>
      {View}
      <Typography
        align="center"
        sx={{
          fontFamily: "Fira Sans",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "30px",
          lineHeight: "111%",
        }}
      >
        {displayedText}
      </Typography>
    </>
  );
};
export default Loading;
