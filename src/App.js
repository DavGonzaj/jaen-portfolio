import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className="App">
      <header>
        <h2>Your Name or Brand</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#portfolio">Portfolio</a>
          <button onClick={() => setDarkMode(!darkMode)} className="toggle">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </header>

      <div className="hero">
        <h1>Welcome to My Site</h1>
        <p>This is a clean and animated landing page. Scroll to see more.</p>
      </div>

      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-card">
          <h2>💼 Check Out My Work</h2>
          <p>I’ve crafted some pretty cool stuff — let me show you.</p>
          <a href="#" className="button">
            View Portfolio
          </a>
        </div>
      </section>

      <footer>
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
