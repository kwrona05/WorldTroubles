import React from "react";
import { useState } from "react";
import {
  OtherButton,
  OtherMenu,
  OtherItem,
  OtherList,
  StyledLink,
} from "./MenuStyledComponents";

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
