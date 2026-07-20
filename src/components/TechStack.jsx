import "../styles/TechStack.css";
import SectionTitle from "./SectionTitle";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiVercel,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";

const technologies = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaFigma />, name: "Figma" },

];

function TechStack() {
  return (
    <section id="tech">
      <SectionTitle
        subtitle="Technologies"
        title="Tech Stack"
      />

      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <div className={`tech-icon ${tech.name.toLowerCase().replace(/\s/g, "-")}`}>
              {tech.icon}
            </div>

            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;