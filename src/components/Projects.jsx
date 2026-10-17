import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-head">
        <div>
          <Reveal><span className="eyebrow">Case Studies</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Product design across healthcare <em>&amp;</em> B2B.</h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="section-lead">
            Work from in-house and agency roles, from patient-facing apps to enterprise
            dashboards and a Fortune 500 ordering platform.
          </p>
        </Reveal>
      </div>

      <div className="case-list">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={0.04 + i * 0.05}>
            <article className="case-row">
              <span className="case-index">{String(i + 1).padStart(2, '0')}</span>
              <div className="case-title">
                <h3>{p.name}</h3>
                <div className="case-org">{p.org}</div>
              </div>
              <div className="case-body">
                <p>{p.blurb}</p>
                <div className="tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <span className="case-year">{p.year}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
