import React, { useState, useEffect } from "react";
import { InfoContainer } from "./ComponentsStyledComponents";

const Information = () => {
  const infoItems = [
    "The Russian invasion continues!",
    "No clean water?",
    "Tragic floods in Valencia",
    "No fresh air",
    "We are losing the lungs of the Earth",
    "Water crisis",
    "Civil War - How much longer?",
    "The Earth's shield is getting weaker",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % infoItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [infoItems.length]);

  return <InfoContainer>{infoItems[currentIndex]}</InfoContainer>;
};
export default Information;
