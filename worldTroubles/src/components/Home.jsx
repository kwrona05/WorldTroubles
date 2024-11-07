import AppHeader from "./Header";
import Globe from "./Globe";
import Information from "./Information";

const Home = () => {
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
export default Home;
