import { useState, useEffect } from "react";
import Quiz from "./Components/Quiz/Quiz";
import "./Components/Quiz/Quiz.css"; // Corrected import to match the actual path

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <Quiz />
    </div>
  );
};

export default App;
