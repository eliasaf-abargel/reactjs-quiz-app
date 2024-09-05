import React, { useState, useEffect } from "react";
import Quiz from "./Components/Quiz/Quiz";
import "./index.css"; // Make sure to import the global CSS

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode by adding/removing the 'dark-mode' class on the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div>
      {/* Button to toggle between light and dark modes */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* Render the Quiz component */}
      <Quiz />
    </div>
  );
};

export default App;
