// import { useEffect, useState } from "react";

// const Intro = ({ onFinish }) => {
//   const items = [
//     "Hunger, addictions, depression, wars, natural disasters, poverty...",
//     "Almost all of us have heard about these problems, but are we aware of the biggest problem of the 21st century?",
//     "Lack of information",
//     "Social media and technology are incredibly absorbing nowadays. As a result, we don't pay as much attention to the world around us.",
//     "This application aims to raise people's awareness of the world around them.",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const showNextSentence = (index) => {
//     if (index < items.length - 1) {
//       setTimeout(() => {
//         setCurrentIndex(index + 1);
//         showNextSentence(index + 1);
//       }, 5000);
//     } else {
//       setTimeout(() => {
//         onFinish();
//       }, 5000);
//     }
//   };

//   useEffect(() => {
//     showNextSentence(0);
//   }, []);

//   return (
//     <div className="detail-container">
//       <h1 style={{ textAlign: "center" }}>{items[currentIndex]}</h1>
//     </div>
//   );
// };

// export default Intro;

import React, { useState, useEffect } from "react";

const Intro = ({ onFinish }) => {
  const sentences = [
    "Hunger, addictions, depression, wars, natural disasters, poverty...",
    "Almost all of us have heard about these problems, but are we aware of the biggest problem of the 21st century?",
    "Lack of information",
    "Social media and technology are incredibly absorbing nowadays. As a result, we don't pay as much attention to the world around us.",
    "This application aims to raise people's awareness of the world around them.",
  ];

  const [typingSpeed] = useState(50);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    console.log("Intro is rendering...");
    const handleTyping = () => {
      if (!isDeleting && charIndex < sentences[sentenceIndex].length) {
        setCurrentText((prev) => prev + sentences[sentenceIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === sentences[sentenceIndex].length) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
        if (sentenceIndex === sentences.length - 1) {
          console.log("All sentences typed, calling onFinish...");
          if (onFinish) onFinish();
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex, sentences, typingSpeed, onFinish]);

  return (
    <div>
      <h1>Intro Debug:</h1>
      <p>
        {currentText}
        <span className="cursor">|</span>
      </p>
      <p>Current Sentence: {sentenceIndex}</p>
    </div>
  );
};

export default Intro;
