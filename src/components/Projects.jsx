import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    
    <section id="projects" className="projects">
      <p className="section-label">Works</p>
      <div className="container card-section">
        <h2>Projects</h2>
        

        <p className="section-desc">
          課題解決を目的に開発したWebアプリケーションです。
          設計から実装、改善まで一貫して取り組んでいます。
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}



export default Projects;