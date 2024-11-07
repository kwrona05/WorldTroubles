import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ReadButton = styled.button`
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

const DetailMenu = styled.div`
  position: relative;
  display: inline-block;
`;

const IssuesList = styled.ul`
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

const CountryItem = styled.li`
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

const ReadMore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="read-more">
      <ReadButton onClick={toggleReadMore}>Read more</ReadButton>
      {isOpen && (
        <DetailMenu>
          <IssuesList>
            <CountryItem>
              <StyledLink to="/ukraine">Konflikt na ukrainie</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/spain">
                Przerazające powodzie w Walencji
              </StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/bangladesh">Problemy z czystą wodą</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/rpa">Kryzys wody</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/amazonia">Amazonia</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/syria">Syria</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/ozonehole">Ozone Hole</StyledLink>
            </CountryItem>
            <CountryItem>
              <StyledLink to="/pekin">Pekin</StyledLink>
            </CountryItem>
          </IssuesList>
        </DetailMenu>
      )}
    </div>
  );
};
export default ReadMore;
