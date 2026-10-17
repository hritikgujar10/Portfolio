import { skills } from '../data/content'
import Reveal from './Reveal'
import { SkillIcon } from './Icons'

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <Reveal><span className="eyebrow">Toolkit</span></Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">Skills that turn ideas into <em>shippable</em> product.</h2>
      </Reveal>

      <div className="skills-list">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={0.04 + i * 0.05}>
            <div className="skill-row">
              <div className="skill-head">
                <span className="skill-ico"><SkillIcon name={s.icon} /></span>
                <h3>{s.title}</h3>
              </div>
              <div className="tags">
                {s.items.map((it) => <span key={it}>{it}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
