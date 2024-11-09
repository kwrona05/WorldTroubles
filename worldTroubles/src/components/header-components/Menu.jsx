import { useState } from "react";
import styled from "styled-components";
import About from "./menu-components.jsx/About";
import ReadMore from "./menu-components.jsx/ReadMore";
import OtherIssues from "./menu-components.jsx/OtherIssues";

const MenuButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-top: 15px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  height: 90vh;
  width: 250px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease;
  z-index: 1;
  gap: 10px;
`;

const MenuApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-app-container">
      <MenuButton onClick={toggleMenu}>
        {isOpen ? "Close menu" : "Open menu"}
      </MenuButton>
      <Sidebar isOpen={isOpen}>
        <About />
        <ReadMore />
        <OtherIssues />
      </Sidebar>
    </div>
  );
};
export default MenuApp;
