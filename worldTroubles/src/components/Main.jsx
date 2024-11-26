import Home from "./Home";
import Intro from "./Intro";
import { useState } from "react";

const MainApp = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return (
    <div className="main">
      {showIntro ? <Intro onFinish={handleIntroFinish} /> : <Home />}
    </div>
  );
};
export default MainApp;
