const stack: string[] = ['MongoDB', 'Express', 'React', 'Node']

export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-grid">
        <div>
          <p className="eyebrow mono">Full-stack web developer</p>
          <h1>I build web apps end to end, from database to browser.</h1>
          <p className="lede">
            Amir Khan — I design and ship products on MongoDB, Express, React
            and Node. Four years of turning ideas into fast, reliable software
            for startups and small teams.
          </p>
          <div className="cta-row">
            <a href="#work" className="btn btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a project
            </a>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="terminal-body">
            <div className="l">// developer.ts</div>
            <div>
              <span className="k">const</span> developer = {'{'}
            </div>
            <div>
              &nbsp;&nbsp;name: <span className="s">&apos;Amir Khan&apos;</span>,
            </div>
            <div>
              &nbsp;&nbsp;stack: [
              {stack.map((s, i) => (
                <span key={s}>
                  <span className="s">&apos;{s}&apos;</span>
                  {i < stack.length - 1 ? ', ' : ''}
                </span>
              ))}
              ],
            </div>
            <div>
              &nbsp;&nbsp;experience: <span className="c">4</span>,
            </div>
            <div>
              &nbsp;&nbsp;basedIn: <span className="s">&apos;Gilgit-Baltistan&apos;</span>,
            </div>
            <div>
              &nbsp;&nbsp;available: <span className="c">true</span>
            </div>
            <div>
              {'}'};<span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
