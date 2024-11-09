import { useEffect, useState, useRef } from "react";

const Intro = () => {
  const items = [
    "Hunger, addictions, depression, wars, natural disasters, poverty...",
    "Almost all of us have heard about these problems, but are we aware of the biggest problem of the 21st century?",
    "Lack of information",
    "Social media and technology are incredibly absorbing nowadays. As a result, we don't pay as much attention to the world around us.",
    "This application aims to raise people's awareness of the world around them.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="detail-container">
      <h1 style={{ textAlign: "center" }}>{items[currentIndex]}</h1>
    </div>
  );
};

export default Intro;
