import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ukraine from "../global-issues/Ukraine";
import Spain from "../global-issues/Spain";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ukraine" element={<Ukraine />} />
        <Route path="/spain" element={<Spain />} />
      </Routes>
    </Router>
  );
};
export default Routing;
