import { useState } from "react";
import styled from "styled-components";

const MenuButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease;
  z-index: 1;
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  background-color: white;
  color: black;

  &:hover {
    background-color: #eee;
  }
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
        <MenuItem>Option1</MenuItem>
        <MenuItem>Option2</MenuItem>
        <MenuItem>Option3</MenuItem>
      </Sidebar>
    </div>
  );
};
export default MenuApp;
