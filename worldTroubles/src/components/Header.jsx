import ToggleSwitch from "./header-components/BackgroundSwitch";
import MenuApp from "./header-components/Menu";
const AppHeader = () => {
  return (
    <div className="app-header">
      <MenuApp />
      <h1>Beyond Border</h1>
      <ToggleSwitch />
    </div>
  );
};
export default AppHeader;
