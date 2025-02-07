import React, { useState, useEffect } from "react";

const Intro = ({ onFinish }) => {
  const sentences = [
    "Hunger, addictions, depression, wars, natural disasters, poverty...",
    "Almost all of us have heard about these problems, but are we aware of the biggest problem of the 21st century?",
    "Lack of information.",
    "Social media and technology are incredibly absorbing nowadays. As a result, we don't pay as much attention to the world around us.",
    "This application aims to raise people's awareness of the world around them.",
  ];

  const [typingSpeed] = useState(70);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    console.log("Intro is rendering...");
    const handleTyping = () => {
      if (charIndex < sentences[sentenceIndex].length) {
        setCurrentText((prev) => prev + sentences[sentenceIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
          if (sentenceIndex === sentences.length - 1) {
            if (onFinish) onFinish();
          }
        }, 500);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex, sentences, typingSpeed, onFinish]);

  return (
    <div className="typing-div">
      <h2 data-testid="intro-header">
        {currentText}
        <span className="cursor" data-testid="cursor">
          |
        </span>
      </h2>
    </div>
  );
};

export default Intro;
