import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="work" className="wrap section">
      <h2>Selected work</h2>
      <p className="section-sub">A few projects that show how I think about product and code.</p>

      {projects.map((project) => (
        <div className="project" key={project.index}>
          <div className="project-index mono">{project.index}</div>
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
