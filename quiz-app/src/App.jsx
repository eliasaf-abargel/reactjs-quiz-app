// import React from 'react'
import Quiz from "./Components/Quiz/Quiz";
import "./Quiz.css"; // Import only Quiz-related styles

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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