import { useState } from "react";
import { ReadButton, DetailMenu, IssuesList, CountryItem, StyledLink } from "./MenuStyledComponents";

const ReadMore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="read-more" style={{ position: "relative" }}>
      <ReadButton onClick={toggleReadMore}>Read more</ReadButton>
      {isOpen && (
        <DetailMenu>
          <IssuesList>
            <CountryItem>
              <StyledLink to="/ukraine">War in Ukraine</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/spain">Floods in Valencia</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/bangladesh">No clear water</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/rpa">Water crysis</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/amazonia">Amazon deforestation</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/syria">Civil war in Syria</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/ozonehole">Ozone Hole</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/pekin">No fresh air in Pekin</StyledLink>
            </CountryItem>
          </IssuesList>
        </DetailMenu>
      )}
    </div>
  );
};
export default ReadMore;
