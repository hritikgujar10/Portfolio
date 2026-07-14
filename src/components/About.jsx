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
              I own <strong>complete design processes in Figma</strong>, from research and user
              flows to scalable design systems, while keeping a firm commitment to
              accessibility standards (WCAG).
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Backed by an <strong>MS in Digital Marketing</strong>, I blend UX strategy with
              Conversion Rate Optimization to turn user-behavior insights into
              measurable product growth.
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
