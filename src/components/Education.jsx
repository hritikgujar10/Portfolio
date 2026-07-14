import { education, certifications } from '../data/content'
import Reveal from './Reveal'
import { Check } from './Icons'

export default function Education() {
  return (
    <section className="section container" id="education">
      <Reveal><span className="eyebrow">Credentials</span></Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">Education & certifications.</h2>
      </Reveal>

      <div className="edu-certs">
        <div>
          {education.map((e, i) => (
            <Reveal key={e.school} delay={0.05 + i * 0.08} className="edu-item">
              <div className="edu-date">{e.date}</div>
              <h3>{e.school}</h3>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-detail">{e.detail}</div>
            </Reveal>
          ))}
        </div>

        <div className="cert-list">
          {certifications.map((c, i) => (
            <Reveal key={c} delay={0.03 + i * 0.05} className="cert-item">
              <Check /> {c}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
