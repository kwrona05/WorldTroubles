import { useState } from "react";
import { AboutButton, SocialMediaMenu, AboutList, ListItem } from "./MenuStyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAbout = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "relative" }}>
      <AboutButton onClick={toggleAbout}>About me</AboutButton>
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
                href="www.linkedin.com/in/kacper-wrona-842b662bb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://github.com/kwrona05"
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
