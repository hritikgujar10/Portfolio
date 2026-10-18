import { profile, stats } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section container" id="about">
      <Reveal><span className="eyebrow">About</span></Reveal>
      <div className="about-grid">
        <div className="about-body">
          <Reveal delay={0.05}>
            <p>
              I own <strong>the full design process in Figma</strong>, from research and user
              flows to scalable design systems, with a firm commitment to accessibility (WCAG).
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              With an <strong>MS in Digital Marketing</strong>, I pair UX strategy with
              conversion-focused thinking, turning user-behavior insights into measurable
              product outcomes.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              I've designed for healthcare platforms, enterprise dashboards, a Fortune 500
              ordering platform, and a nonprofit's volunteer platform, and I build and ship
              my own work.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="about-signature">{profile.name}</p>
          </Reveal>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 + i * 0.08} className="stat">
              <div className="v">{s.value}</div>
              <div className="l">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
