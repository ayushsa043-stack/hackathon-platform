import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      title: "Welcome to Hackathon Platform",
      text: "Join exciting hackathons, build strong teams, share ideas through blogs, and create impactful projects together.",
      position: "center center",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
      title: "Build Innovative Teams",
      text: "Collaborate with talented people, form strong teams, and solve real-world challenges together.",
      position: "center 20%",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80",
      title: "Showcase Your Ideas",
      text: "Share your projects, publish blogs, and participate in hackathons that help you grow your skills.",
      position: "center 20%",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
  backgroundImage: `
    linear-gradient(
      rgba(0,0,0,0.55),
      rgba(13,71,161,0.55)
    ),
    url(${slides[current].image})
  `,
  backgroundPosition: slides[current].position,
}}
    >
      <button className="hero-arrow left-arrow" onClick={prevSlide}>
        ❮
      </button>

      <div className="hero-overlay">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].text}</p>
        <button className="hero-btn">Explore Hackathons</button>
      </div>

      <button className="hero-arrow right-arrow" onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
}

export default Hero;