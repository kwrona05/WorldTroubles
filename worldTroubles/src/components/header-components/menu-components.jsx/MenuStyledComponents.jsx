import styled from "styled-components";
import { Link } from "react-router-dom";

//About.jsx
export const AboutButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ff6f59;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  width: 135px;

  &:hover {
    background-color: #ff8a73;
  }
`;

export const SocialMediaMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 10px;
  z-index: 1000;
`;
export const AboutList = styled.ul`
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

export const ListItem = styled.li`
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

//OtherIssues.jsx
export const OtherButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ff6f59;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff8a73;
  }
`;

export const OtherMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 10px;
  z-index: 1000;
`;

export const OtherList = styled.ul`
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

export const OtherItem = styled.li`
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

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 100%;

  &:hover {
    color: inherit;
  }
`;

//ReadMore.jsx
export const ReadButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ff6f59;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  width: 135px;

  &:hover {
    background-color: #ff8a73;
  }
`;

export const DetailMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 10px;
  z-index: 1000;
`;

export const IssuesList = styled.ul`
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

export const CountryItem = styled.li`
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
