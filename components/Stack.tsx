import { stack } from '@/data/stack'

export default function Stack() {
  return (
    <section id="stack" className="wrap section">
      <h2>Stack</h2>
      <p className="section-sub">The tools I reach for most, plus a few extras I use around them.</p>
      <div className="stack-row">
        {stack.map((tool) => (
          <div className="stack-pill" key={tool.name}>
            <i style={{ background: tool.color }} />
            {tool.name}
          </div>
        ))}
      </div>
    </section>
  )
}
