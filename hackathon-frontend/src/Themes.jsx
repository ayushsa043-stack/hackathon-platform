import { useState } from "react";
import "./Themes.css";

function Themes() {
  const themes = [
    {
      title: "AGRICULTURE, FOODTECH & RURAL DEVELOPMENT",
      desc: "Developing solutions to improve agriculture and rural growth.",
      icon: "🌾",
    },
    {
      title: "SMART VEHICLES",
      desc: "Creating intelligent vehicle solutions.",
      icon: "🚗",
    },
    {
      title: "TRANSPORTATION & LOGISTICS",
      desc: "Solving transport and logistics challenges.",
      icon: "🚚",
    },
    {
      title: "MISCELLANEOUS",
      desc: "Technology ideas in tertiary sectors.",
      icon: "💡",
    },
    {
      title: "FINTECH",
      desc: "Challenges related to financial services.",
      icon: "💰",
    },
    {
      title: "SMART AUTOMATION",
      desc: "AI based automation and innovation.",
      icon: "🤖",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index + 3 < themes.length) {
      setIndex(index + 3);
    }
  };

  const prev = () => {
    if (index - 3 >= 0) {
      setIndex(index - 3);
    }
  };

  return (
    <section className="themes-section">
      <h2 className="themes-title">THEMES</h2>
      <p className="themes-subtitle">
        No problem is too big... No idea is too small
      </p>

      <div className="themes-wrapper">
        <button className="arrow left" onClick={prev}>
          ←
        </button>

        <div className="themes-container">
          {themes.slice(index, index + 3).map((theme, i) => (
            <div className="theme-card" key={i}>
              <div className="theme-icon">{theme.icon}</div>
              <h3>{theme.title}</h3>
              <p>{theme.desc}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={next}>
          →
        </button>
      </div>
    </section>
  );
}

export default Themes;