import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import React, { useRef, useState } from "react";
import Home from "./components/Home";
import Ukraine from "./components/header-components/global-issues/Ukraine";
import Spain from "./components/header-components/global-issues/Spain";
import Bangladesh from "./components/header-components/global-issues/Bangladesh";
import SouthAfrica from "./components/header-components/global-issues/RPA";
import OzoneHole from "./components/header-components/global-issues/OzoneHole";
import Pekin from "./components/header-components/global-issues/Pekin";
import Syria from "./components/header-components/global-issues/Syria";
import Amazonia from "./components/header-components/global-issues/Amazonia";
import Obesity from "./components/header-components/other-issues/Obesity";
import Addictions from "./components/header-components/other-issues/Addictions";
import Depression from "./components/header-components/other-issues/Depression";
import Hunger from "./components/header-components/other-issues/Hunger";
import Education from "./components/header-components/other-issues/Education";
import HealthCare from "./components/header-components/other-issues/HealthCare";
import Poverty from "./components/header-components/other-issues/Poverty";
import MainApp from "./components/Main";
import WelcomeScreen from "./components/Welcome";

const App = () => {
  return (
    <Router future={{ v7_startTransition: true }}>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const [audioPlayed, setAudioPlayed] = useState(false);

  const handleStart = () => {
    audioRef.current.play().catch((error) => {
      console.error("Error during playing audio", error);
      alert("Sorry, the audio couldn't be played. Please try again.");
    });
    setAudioPlayed(true);

    navigate("/main");
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="intro.mp3"
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <Routes>
        <Route path="/main" element={<MainApp />} />
        <Route path="/" element={<WelcomeScreen onStart={handleStart} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ukraine" element={<Ukraine />} />
        <Route path="/spain" element={<Spain />} />
        <Route path="/bangladesh" element={<Bangladesh />} />
        <Route path="/rpa" element={<SouthAfrica />} />
        <Route path="/ozonehole" element={<OzoneHole />} />
        <Route path="/pekin" element={<Pekin />} />
        <Route path="/syria" element={<Syria />} />
        <Route path="/amazonia" element={<Amazonia />} />
        <Route path="/obesity" element={<Obesity />} />
        <Route path="/addictions" element={<Addictions />} />
        <Route path="/depression" element={<Depression />} />
        <Route path="/hunger" element={<Hunger />} />
        <Route path="/education" element={<Education />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/poverty" element={<Poverty />} />
      </Routes>
    </>
  );
};

export default App;
