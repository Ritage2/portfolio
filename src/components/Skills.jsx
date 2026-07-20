import "../styles/Skills.css";
import SectionTitle from "./SectionTitle";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "Building modern, responsive web applications using React and JavaScript.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Creating websites that provide a seamless experience across desktop, tablet, and mobile devices.",
  },
  {
    icon: <FaCode />,
    title: "UI Development",
    description:
      "Transforming designs into clean, interactive, and user-friendly interfaces.",
  },
  {
    icon: <FaRocket />,
    title: "Deployment",
    description:
      "Deploying and managing projects using GitHub and Vercel.",
  },
  {
    icon: <FaGitAlt />,
    title: "Version Control",
    description:
      "Managing source code efficiently with Git and GitHub.",
  },
];

function Skills() {
  return (
    <section id="skills">
      <SectionTitle
        subtitle="What I Do"
        title="My Skills"
      />

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;