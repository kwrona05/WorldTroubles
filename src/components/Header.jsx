import React from "react";
import MenuApp from "./header-components/Menu";
const AppHeader = () => {
  return (
    <div className="app-header">
      <MenuApp />
      <h1 data-testid="app-header">Beyond Border</h1>
    </div>
  );
};
export default AppHeader;
