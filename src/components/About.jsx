import "../styles/About.css";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaPalette } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about">

      <SectionTitle
        subtitle="Who I Am"
        title="About Me"
      />

      <div className="about-container">

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="circle"></div>

          <FaLaptopCode className="icon" />

          <h3>Frontend React Developer</h3>

          <p>
            Passionate about building responsive,
            modern, and user-friendly web applications.
          </p>

        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2>Building modern web experiences.</h2>

          <p>
            I'm <strong>Ritage Hamada</strong>, a Computer Science graduate
            specializing in Frontend Development using React, JavaScript,
            HTML, CSS, and Bootstrap.
          </p>

          <p>
            I enjoy transforming ideas into responsive, interactive,
            and visually appealing websites with clean, maintainable code.
          </p>

          <div className="features">

            <div>
              <FaCode />
              <span>Clean Code</span>
            </div>

            <div>
              <FaPalette />
              <span>Modern UI Design</span>
            </div>

            <div>
              <FaLaptopCode />
              <span>Responsive Websites</span>
            </div>

          </div>

          

        </motion.div>

      </div>

    </section>
  );
}

export default About;