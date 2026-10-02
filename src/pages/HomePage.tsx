import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">FRONTEND DEVELOPER</p>

          <h1>
            Hi, I'm <span>Javohir Bozorov</span>
          </h1>

          <h2>I build modern web experiences.</h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications using
            modern frontend technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/projects">View Projects ↗</Link>

            <Link to="/contact">Contact Me ↗</Link>
          </div>
        </div>

        <div className="hero-side">
          <span>BASED IN</span>
          <strong>Uzbekistan</strong>

          <span>FOCUS</span>
          <strong>Frontend Development</strong>

          <span>STATUS</span>
          <strong>Open to opportunities</strong>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <span>01</span>
          <strong>1+</strong>
          <p>Year Learning</p>
        </div>

        <div className="stat-card">
          <span>02</span>
          <strong>14</strong>
          <p>Technologies & Tools</p>
        </div>

        <div className="stat-card">
          <span>03</span>
          <strong>2024–2025</strong>
          <p>PDP Education</p>
        </div>
      </section>

      <section className="about-preview">
        <div>
          <p className="section-label">ABOUT ME</p>

          <h2>Building skills through real projects.</h2>
        </div>

        <div>
          <p>
            I am a Frontend Developer focused on building modern, responsive and
            user-friendly web applications.
          </p>

          <p>
            I studied frontend development at PDP during 2024–2025 and continue
            improving my skills by building personal projects and learning
            modern technologies.
          </p>

          <Link to="/about">More about me ↗</Link>
        </div>
      </section>

      <section className="projects-preview">
        <div className="section-heading">
          <div>
            <p className="section-label">SELECTED WORK</p>

            <h2>Featured Projects</h2>
          </div>

          <Link to="/projects">View all ↗</Link>
        </div>

        <div className="projects-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </section>

      <section className="skills-preview">
        <div className="section-heading">
          <div>
            <p className="section-label">TECH STACK</p>

            <h2>Technologies I use</h2>
          </div>

          <Link to="/skills">View all ↗</Link>
        </div>

        <div className="skills-list">
          {skills.slice(0, 8).map((skill) => (
            <div className="skill-card" key={skill.name}>
              <strong>{skill.name}</strong>
              <span>{skill.category}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-preview">
        <p className="section-label">LET'S CONNECT</p>

        <h2>Have a project in mind?</h2>

        <p>
          I'm open to frontend opportunities, internships and interesting
          projects.
        </p>

        <Link to="/contact">Get in touch ↗</Link>
      </section>
    </div>
  );
}

export default HomePage;
