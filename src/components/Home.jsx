import AppHeader from "./Header";
import Globe from "./Globe";
import Information from "./Information";
import React from "react";

const Home = () => {
  return (
    <div className="app-container">
      <AppHeader />
      <div className="content-container">
        <Information />
        <Globe />
      </div>
    </div>
  );
};
export default Home;
