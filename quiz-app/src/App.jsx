import { useState, useEffect } from "react"; // Import only the necessary hooks
import Quiz from "./Components/Quiz/Quiz";
import "./Quiz.css"; // Import only Quiz-related styles

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
    <div className={darkMode ? "dark-mode" : ""}>
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
