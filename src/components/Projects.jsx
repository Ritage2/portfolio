import "../styles/Projects.css";
import projects from "../data/projects";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects">

      <SectionTitle
        subtitle="Portfolio"
        title="Featured Projects"
      />

      {projects.map((project, index) => (

        <motion.div
          className={`project ${index % 2 !== 0 ? "reverse" : ""}`}
          key={project.id}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-info">

            <span className="number">
              0{project.id}
            </span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.demo}>
                Live Demo →
              </a>
            </div>

          </div>

        </motion.div>

      ))}

    </section>
  );
}

export default Projects;