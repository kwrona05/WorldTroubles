import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const AboutButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  width: 135px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SocialMediaMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 10px;
  z-index: 1000;
`;

const AboutList = styled.ul`
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

const ListItem = styled.li`
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

  a {
    color: inherit;
    text-decoration: none;
    width: 100%;
  }
`;

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAbout = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "relative" }}>
      <AboutButton onClick={toggleAbout}>Who am I</AboutButton>
      {isOpen && (
        <SocialMediaMenu>
          <AboutList>
            <ListItem>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </ListItem>
          </AboutList>
        </SocialMediaMenu>
      )}
    </div>
  );
};

export default About;
