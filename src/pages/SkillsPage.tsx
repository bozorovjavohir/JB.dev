import { skills } from "../data/skills";

function SkillsPage() {
  return (
    <div className="skills-page">
      <p className="section-label">TECH STACK</p>

      <h1>My Skills</h1>

      <p className="skills-page-description">
        Technologies and tools I use to build modern web applications.
      </p>

      <div className="skills-page-grid">
        {skills.map((skill) => (
          <div className="skills-page-card" key={skill.name}>
            <div className="skills-page-card-top">
              <span>{skill.category}</span>
              <span>↗</span>
            </div>

            <h2>{skill.name}</h2>

            <div className="skill-level">
              <span></span>
            </div>

            <p>Frontend Technology</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
