import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle music
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Dynamic class for dark mode
  const appClass = darkMode ? "app dark-mode" : "app";

  return (
    <div className={appClass}>
      <header className="header">
        <h1>World War II: A Glance into History</h1>
      </header>

      {/* Music Button (top-left corner) */}
      <button className="music-btn" onClick={toggleMusic}>
        {isMusicPlaying ? "Stop Music" : "Play Music"}
      </button>

      {/* Dark Mode Button (top-right corner) */}
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <section className="images-section">
        <h2>Historic Moments</h2>
        <div className="images-container">
          {/* Reference images directly from the public folder */}
          <img
            src="/assets/image1.jpg"
            alt="WW2 Moment 1"
            className="animated-image"
          />
          <img
            src="/assets/image2.jpg"
            alt="WW2 Moment 2"
            className="animated-image"
          />
          <img
            src="/assets/image3.jpg"
            alt="WW2 Moment 3"
            className="animated-image"
          />
          <img
            src="/assets/image4.jpg"
            alt="WW2 Moment 4"
            className="animated-image"
          />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>World War II: A glance into history</p>
      </footer>

      {/* Music Component */}
      {isMusicPlaying && <MusicComponent />}
    </div>
  );
}

// Music component
function MusicComponent() {
  return (
    <div className="music-section">
      <audio autoPlay loop>
        {/* Reference the music file directly from the public folder */}
        <source src="/assets/ww2.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
