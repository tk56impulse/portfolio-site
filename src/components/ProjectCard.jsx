function ProjectCard({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} />

      <h3>{project.title}</h3>

      <p><strong>概要：</strong><br />{project.description}</p>
      <p><strong>技術：</strong>{project.tech}</p>
      <p><strong>背景：</strong>{project.background}</p>
      <p><strong>工夫：</strong>{project.solution}</p>
      <p><strong>改善：</strong>{project.improvement}</p>

      <a href={project.github} target="_blank">
        GitHubを見る
      </a>
    </div>
  );
}

export default ProjectCard;