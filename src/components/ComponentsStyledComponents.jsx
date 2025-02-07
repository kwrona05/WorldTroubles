import styled from "styled-components";

export const BackButton = styled.button`
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

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 20px;
  color: #ffffff;
  transition: color 0.3s;
  width: 300px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: center;
  background-color: #1f1f1f;
  border-radius: 10px;
  border: 2px solid #ffc857;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
