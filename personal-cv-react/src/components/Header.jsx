import { useState, useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="card header-section">

      {/* Dark Mode Button */}
      <button
        id="themeToggle"
        className="top-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>Baclia-an, Honey Grace V.</h1>
      <h1>IT Student | WEB SYSTEMS AND TECHNOLOGIES</h1>

    </header>
  );
}

export default Header;
