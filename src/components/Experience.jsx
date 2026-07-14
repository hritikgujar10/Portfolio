import { experience } from '../data/content'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <Reveal><span className="eyebrow">Experience</span></Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">Where I've shipped design that matters.</h2>
      </Reveal>

      <div className="timeline">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={0.04 + i * 0.05}>
            <article className="exp-item">
              <div className="exp-side">
                <div className="period">{e.period}</div>
                <span className="tag">{e.tag}</span>
              </div>
              <div className="exp-main">
                <h3 className="exp-role">{e.role}</h3>
                <p className="exp-company"><b>{e.company}</b> · {e.location}</p>
                <ul className="exp-points">
                  {e.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
