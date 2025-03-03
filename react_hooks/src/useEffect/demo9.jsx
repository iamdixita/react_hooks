// This effect changes the background color when dark mode is toggled.

import React, { useState, useEffect } from "react"; 

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply background color based on `darkMode` state
    document.body.style.backgroundColor = darkMode ? "#333" : "#fff";

    // Cleanup function to reset background color when component unmounts
    return () => {
      document.body.style.backgroundColor = "#fff";
    };
  }, [darkMode]); // Runs whenever `darkMode` state changes

  return (
    <>
    <h1>9. Dark Mode Toggle</h1>
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Toggle light mode" : " Toggle Dark Mode"}
    </button>
    </>
  );
}

export default DarkMode; 
