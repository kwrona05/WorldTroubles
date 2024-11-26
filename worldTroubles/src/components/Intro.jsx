import { useEffect, useState } from "react";

const Intro = ({ onFinish }) => {
  const items = [
    "Hunger, addictions, depression, wars, natural disasters, poverty...",
    "Almost all of us have heard about these problems, but are we aware of the biggest problem of the 21st century?",
    "Lack of information",
    "Social media and technology are incredibly absorbing nowadays. As a result, we don't pay as much attention to the world around us.",
    "This application aims to raise people's awareness of the world around them.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextSentence = (index) => {
    if (index < items.length - 1) {
      setTimeout(() => {
        setCurrentIndex(index + 1);
        showNextSentence(index + 1);
      }, 5000);
    } else {
      setTimeout(() => {
        onFinish();
      }, 5000);
    }
  };

  useEffect(() => {
    showNextSentence(0);
  }, []);

  return (
    <div className="detail-container">
      <h1 style={{ textAlign: "center" }}>{items[currentIndex]}</h1>
    </div>
  );
};

export default Intro;
