// src/components/Home.js
import React, { useEffect, useState } from "react";
import "./Home.css"; // optional styling file

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [index, setIndex] = useState(0);
  const words = ["Innovation", "Creativity", "Solutions"];
  const dynamicWord = words[index];

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // change word every 2.5 seconds

    return () => clearInterval(interval);
  }, [darkMode]);

  return (
    <div className="App">
      {/* Dark Mode Toggle */}
      <div className="dark-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Header */}
      <header>
        <div className="brand">
          <img
            src="https://via.placeholder.com/150x40?text=LOGO"
            alt="Brand Logo"
            className="logo"
          />
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <button
          onClick={() => {
            const portfolioSection = document.getElementById("portfolio");
            portfolioSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="portfolio-button"
        >
          View Portfolio
        </button>

        <h1 className="hero-title">
          Welcome to <span className="animated-text">{dynamicWord}</span>
        </h1>
        <p>This is a clean and animated landing page. Scroll to see more.</p>
      </div>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-card">
          <div className="portfolio-icon">💼</div>
          <h2>Check Out My Work</h2>
          <p>I’ve crafted some pretty cool stuff — let me show you.</p>
          <a href="/portfolio" className="button">
            View Portfolio
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form method="POST" action="http://localhost:5000/contact">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <ScrollToTopButton />
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Scroll To Top Button Component
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const contactSection = document.getElementById("contact");
      const rect = contactSection?.getBoundingClientRect();
      const isBelow = rect?.top < window.innerHeight / 2;
      setVisible(isBelow);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${visible ? "visible" : ""}`}
    >
      ⬆️
    </button>
  );
}

export default Home;
