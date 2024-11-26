import { useState, useEffect } from "react";
// import styled from "styled-components";
import { InfoContainer } from "./ComponentsStyledComponents";

// const InfoContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 24px;
//   padding: 20px;
//   color: #ffffff;
//   transition: color 0.3s;
//   width: 300px;
//   word-wrap: break-word;
//   overflow-wrap: break-word;
//   text-align: center;
//   background-color: #1f1f1f;
//   border-radius: 10px;
//   border: 2px solid #4caf50;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

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
