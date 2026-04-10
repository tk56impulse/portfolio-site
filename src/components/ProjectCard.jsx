function ProjectCard({ project }) {
  return (
    <div className="card">
      {project.image && <img src={project.image} alt={project.title} />}

      {project.title.includes("開発中") && (
        <span className="badge">開発中</span>
      )}

      {project.title.includes("前身") && (
        <span className="badge gray">前身</span>
      )}

      <h3>{project.title}</h3>

      <p><strong>概要：</strong><br />{project.description}</p>
      <p><strong>背景：</strong>{project.background}</p>
      <p><strong>工夫：</strong>{project.solution}</p>
      <p><strong>改善：</strong>{project.improvement}</p>

      <div className="tags">
        {project.tech.map((t, index) => (
          <span key={index} className="tag">{t}</span>
        ))}
      </div>

      <a href={project.github} target="_blank" rel="noreferrer" className="btn">
        GitHubを見る
      </a>
      </div>
  );
}

export default ProjectCard;