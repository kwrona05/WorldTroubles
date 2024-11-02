import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Globe from "./components/Globe";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Globe />
  </StrictMode>
);
