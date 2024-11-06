import Globe from "./components/Globe";
import "./App.css";
import AppHeader from "./components/Header";
import Information from "./components/Information";
const App = () => {
  return (
    <div className="app-container">
      <AppHeader />
      <div className="content-container">
        <Globe />
        <Information />
      </div>
    </div>
  );
};
export default App;
