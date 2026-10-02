import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <p className="section-label">MY PROJECTS</p>

      <h1>Projects</h1>

      <p className="projects-page-description">
        A selection of personal projects I have built while learning and
        improving my frontend development skills.
      </p>

      <div className="projects-page-grid">
        {projects.map((project) => (
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
    </div>
  );
}

export default ProjectsPage;
