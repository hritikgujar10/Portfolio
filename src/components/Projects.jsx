import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <Reveal><span className="eyebrow">Selected Work</span></Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">Projects across healthcare, B2B & analytics.</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="section-lead">
          A snapshot of products I've designed, from patient-facing apps to enterprise
          dashboards and a Fortune 500 B2B platform.
        </p>
      </Reveal>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={0.05 + i * 0.06}>
            <article className="project-card">
              <div className="project-glow" style={{ background: p.accent }} />
              <div className="project-top">
                <span className="project-index">{String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
                <span className="project-year">{p.year}</span>
              </div>
              <h3>{p.name}</h3>
              <div className="project-org">{p.org}</div>
              <p className="project-blurb">{p.blurb}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
