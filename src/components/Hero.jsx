import "../styles/Hero.css";
import profile from "../assets/profile.jpg";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg">
        <span className="circle one"></span>
        <span className="circle two"></span>
        <span className="circle three"></span>
      </div>

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h4>Hello, I'm 👋</h4>

        <h1>Ritage Hamada</h1>

        <TypeAnimation
          sequence={[
            "React Frontend  Developer",
            2000,
            
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />

        <p>
          I create modern, responsive and interactive web applications
          with React, JavaScript and beautiful UI design.
        </p>

        <div className="hero-buttons">
  <a href="#projects" className="primary">
    View Projects
  </a>

  <a href="/resume.pdf" className="secondary" download>
    Download CV
  </a>
</div>

        <div className="hero-stats">

  <div className="stat-card">
    <h3>3+</h3>
    <span>Projects Completed</span>
  </div>

  <div className="stat-card">
    <h3>10+</h3>
    <span>Technologies</span>
  </div>

  <div className="stat-card">
    <h3>2026</h3>
    <span>Graduate</span>
  </div>

</div>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="photo-card">

          <img src={profile} alt="Ritage" />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;