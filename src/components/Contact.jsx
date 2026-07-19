import "../styles/Contact.css";
import SectionTitle from "./SectionTitle";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <SectionTitle
        subtitle="Get In Touch"
        title="Contact Me"
      />

      <div className="contact-card">
        <h2>Let's Connect</h2>

        <p>
          I'm always open to new opportunities, freelance projects, and
          collaborations. If you have a project in mind or just want to say
          hello, I'd love to hear from you.
        </p>

        <div className="contact-items">

          <a
            href="mailto:ritaj.hamada.9.email@gamil.com"
            className="contact-item"
          >
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <span>ritaj.hamada.9@gmail.com</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ritage-hamada-b7524a309/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin />
            <div>
              <h4>LinkedIn</h4>
              <span>linkedin.com/in/your-linkedin</span>
            </div>
          </a>

          <a
            href="https://github.com/Ritage2"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub />
            <div>
              <h4>GitHub</h4>
              <span>github.com/Ritage2</span>
            </div>
          </a>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <span>Alexandria, Egypt</span>
            </div>
          </div>

        </div>

        <a href="/resume.pdf" download className="cv-btn">
          <FaFileDownload />
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;