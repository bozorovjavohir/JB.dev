type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
};

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span>PROJECT</span>
        <span>↗</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>

        <a href={demo} target="_blank" rel="noreferrer">
          Live Demo ↗
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
