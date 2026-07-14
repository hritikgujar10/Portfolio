import { skills } from '../data/content'
import Reveal from './Reveal'
import { SkillIcon } from './Icons'

export default function Skills() {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section className="section container" id="skills">
      <Reveal><span className="eyebrow">Toolkit</span></Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">Skills that turn ideas into shippable product.</h2>
      </Reveal>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={0.05 + i * 0.07}>
            <div className="skill-card" onMouseMove={onMove}>
              <div className="skill-ico"><SkillIcon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <div className="skill-tags">
                {s.items.map((it) => <span key={it}>{it}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
