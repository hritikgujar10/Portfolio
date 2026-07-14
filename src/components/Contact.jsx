import { profile } from '../data/content'
import Reveal from './Reveal'
import { Mail, LinkedIn, Github, Arrow } from './Icons'

export default function Contact() {
  return (
    <section className="section contact container" id="contact">
      <Reveal><span className="eyebrow" style={{ justifyContent: 'center' }}>Contact</span></Reveal>
      <Reveal delay={0.05}>
        <h2>Let's build something<br /><span className="accent">people love to use.</span></h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="contact-lead">
          Open to UI/UX & Product Design roles. If you're hiring, or just want to talk
          design systems and accessibility, I'd love to chat.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="socials">
          <a className="social-btn" href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
          <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
          <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
        </div>
      </Reveal>

      <footer className="footer">
        <span>© {profile.name} · {new Date().getFullYear()}</span>
        <span>Designed & built with care · {profile.phone}</span>
        <a className="to-top" href="#top">Back to top <Arrow style={{ transform: 'rotate(-45deg)' }} /></a>
      </footer>
    </section>
  )
}
