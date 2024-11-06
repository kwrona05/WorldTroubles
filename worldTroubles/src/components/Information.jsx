import { useState, useEffect } from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 20px;
  color: ${(props) => props.theme.textColor};
  transition: color 0.3s;
  width: 300px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: center;
`;

const Information = () => {
  const infoItems = [
    "Konflikt na Ukrainie",
    "Problemy z czystą wodą",
    "Przerazające powodzie w Walencji",
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
