import React, { useState } from "react";
import "./SettingPage.scss";

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-theme", !isDarkMode);
  };

  return (
    <main id="setting">
      <div className="container">
        <div className="wrapper">
          <h1>Settings</h1>
        </div>
        <div className="theme-switcher">
          <label>
            Dark Theme:
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
          </label>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
