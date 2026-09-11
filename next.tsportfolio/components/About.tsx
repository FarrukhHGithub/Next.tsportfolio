export default function About() {
  return (
    <section id="about" className="wrap section">
      <h2>About</h2>
      <p className="section-sub">A short version of how I work and what I care about.</p>
      <div className="about-grid">
        <p>
          <strong>I work across the whole stack</strong> — from schema design
          in MongoDB to building the API layer in Express and Node, through
          to the interface in React. That means fewer handoffs and fewer
          things lost in translation between front end and back end.
        </p>
        <p>
          <strong>I care about the boring parts too:</strong> clean error
          handling, sensible loading states, and code that the next developer
          can actually read. Good software is mostly about the parts nobody
          notices when they work.
        </p>
      </div>
    </section>
  )
}
