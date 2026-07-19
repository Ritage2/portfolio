import "../styles/Skills.css";
import SectionTitle from "./SectionTitle";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiVercel,
} from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaCode />, name: "VS Code" },
  { icon: <SiVercel />, name: "Vercel" },
];

function Skills() {
  return (
    <section id="skills">
      <SectionTitle
        subtitle="Technologies"
        title="My Skills"
      />

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div
              className={`skill-icon ${skill.name
                .toLowerCase()
                .replace(/\s/g, "-")}`}
            >
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;