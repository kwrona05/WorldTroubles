import { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { backgroundBlurriness } from "three/webgpu";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: Arial, sans-serif;
    transition: background-color 0.5s ease, color 0.5s ease;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  backgroundColor: "linear-gradient(to bottom, #3a3a3a, #12121212",
  textColor: "#ffffff",
};

const darkTheme = {
  backgroundColor:
    "url('https://www.transparenttextures.com/patterns/stars.png')", // Starry background
  backgroundSize: "cover",
  textColor: "#ffffff",
};

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleTheme = () => setIsOn(!isOn);

  return (
    <ThemeProvider theme={isOn ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Switch isOn={isOn} onClick={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
};

export default ToggleSwitch;
