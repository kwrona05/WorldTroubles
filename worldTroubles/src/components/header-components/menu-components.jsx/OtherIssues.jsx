import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OtherButton = styled.button`
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

const OtherMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 10px;
  z-index: 1000;
`;

const OtherList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  width: 150px;
`;

const OtherItem = styled.li`
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-size: 16px;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 100%;

  &:hover {
    color: inherit;
  }
`;

const OtherIssues = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOther = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="other-container" style={{ position: "relative" }}>
      <OtherButton onClick={toggleOther}>Other Issues</OtherButton>
      {isOpen && (
        <OtherMenu>
          <OtherList>
            <OtherItem>
              <StyledLink to="/obesity">Obesity</StyledLink>
            </OtherItem>
            <OtherItem>
              <StyledLink to="/addictions">Addictions</StyledLink>
            </OtherItem>
            <OtherItem>
              <StyledLink to="/depression">Depression</StyledLink>
            </OtherItem>
            <OtherItem>
              <StyledLink to="/hunger">Hunger</StyledLink>
            </OtherItem>
            <OtherItem>
              <StyledLink to="/education">Education</StyledLink>
            </OtherItem>
            <OtherItem>
              <StyledLink to="/healthcare">Health care</StyledLink>
            </OtherItem>
            <OtherItem>
              <StyledLink to="/poverty">Poverty</StyledLink>
            </OtherItem>
          </OtherList>
        </OtherMenu>
      )}
    </div>
  );
};
export default OtherIssues;
