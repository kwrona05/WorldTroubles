import { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

const backgroundChange = keyframes`
0% {opacity: 0; }
100% {opacity: 1;}`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${(props) => props.theme.backgroundImage});
  background-size: cover;
  background-position: center;
  animation: ${backgroundChange} 0.5s ease-in-out;
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: ${(props) => (props.isOn ? "#4CAF50" : "#ccc")};
  transition: background-color 0.3s;

  &:before {
    content: "";
    position: absolute;
    top: 3px;
    left: ${(props) => (props.isOn ? "30px" : "3px")};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.3s;
  }
`;

const lightTheme = {
  backgroundImage: "", //link do zdjęcia ze słońcem
};

const darkTheme = {
  backgroundImage: "", //link do zdjęcia kosmosu
};

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleTheme = () => setIsOn(!isOn);

  return (
    <ThemeProvider theme={isOn ? darkTheme : lightTheme}>
      <Container>
        <Switch isOn={isOn} onClick={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
};

export default ToggleSwitch;
