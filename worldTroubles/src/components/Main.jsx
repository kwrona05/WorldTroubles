import Home from "./Home";
import Intro from "./Intro";
import { useState, useEffect } from "react";

const MainApp = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  return <div className="main">{showIntro ? <Intro /> : <Home />}</div>;
};
export default MainApp;
