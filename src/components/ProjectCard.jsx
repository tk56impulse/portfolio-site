function ProjectCard({ project }) {
  return (
    <div className="card">
      {project.image && <img src={project.image} alt={project.title} />}

      {project.status === "active" && (
        <span className="status-badge active">開発中</span>
      )}

      {project.status === "legacy" && (
        <span className="status-badge legacy">前身アプリ</span>
      )}

      <h3>{project.title}</h3>

      <p>
        <strong>概要：</strong>
        <br />
        {project.description}
      </p>

      {project.background && (
        <p>
          <strong>背景：</strong>
          {project.background}
        </p>
      )}

      {project.solution && (
        <p>
          <strong>工夫：</strong>
          {project.solution}
        </p>
      )}

      {project.improvement && (
        <p>
          <strong>改善：</strong>
          {project.improvement}
        </p>
      )}

      <div className="tags">
        {project.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            デモを見る
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn outline-btn"
          >
            GitHubを見る
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;