import React from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "./ComponentsStyledComponents";

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
