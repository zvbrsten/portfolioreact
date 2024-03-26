// DarkModeToggle.js
import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const themes = [
    {
      background: "linear-gradient(45deg, red, blue)",
      margin: "0",
      fontFamily: "Rethink Sans",
      animation: "rt 5s infinite ease",
      backgroundSize: "100% 350%",
      animationName: "rt",
      animationDuration: "5s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease",
    },
    {
      background: "linear-gradient(45deg, blue, black)",
      margin: "0",
      fontFamily: "Rethink Sans",
      animation: "rt 5s infinite ease",
      backgroundSize: "100% 350%",
      animationName: "rt",
      animationDuration: "5s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease",
    },
    {
      background: "linear-gradient(45deg,#ff00bd, #00fade)",
      margin: "0",
      fontFamily: "Rethink Sans",
      animation: "rt 5s infinite ease",
      backgroundSize: "100% 350%",
      animationName: "rt",
      animationDuration: "5s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease",
    },
    
  ];

  const toggleTheme = () => {
    setThemeIndex((themeIndex + 1) % themes.length);
    applyTheme(themes[themeIndex]);
  };

  const applyTheme = (theme) => {
    for (const property in theme) {
      document.body.style[property] = theme[property];
    }
  };

  return (
    <button onClick={toggleTheme} className='theme'>Toggle Theme</button>
  );
};

export default DarkModeToggle;
