import React from "react";
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
import { BackButton } from "./ComponentsStyledComponents";

// const BackButton = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;
const BackHome = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <BackButton onClick={handleGoBack}>Home page</BackButton>
    </div>
  );
};
export default BackHome;
