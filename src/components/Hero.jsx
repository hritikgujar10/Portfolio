import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { Arrow, Mail } from './Icons'

const rise = {
  hidden: { y: 40, opacity: 0 },
  show: (i) => ({ y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 } }),
}

const fade = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <header className="hero container" id="top">
      <motion.div className="hero-badge" {...fade(0.15)}>
        <span className="dot" /> Available for UI/UX roles · {profile.location}
      </motion.div>

      <h1 className="hero-title">
        <span className="line"><motion.span variants={rise} custom={0} initial="hidden" animate="show">Designing products</motion.span></span>
        <span className="line"><motion.span variants={rise} custom={1} initial="hidden" animate="show">people <em>enjoy</em> using.</motion.span></span>
      </h1>

      <motion.p className="hero-sub" {...fade(0.55)}>
        I'm <strong>{profile.name}</strong>, a UI/UX Product Designer with 3+ years of experience
        turning complex requirements into <strong>intuitive, accessible, data-rich</strong> products
        across healthcare, fintech, B2B and e-commerce.
      </motion.p>

      <motion.div className="hero-actions" {...fade(0.7)}>
        <a className="btn btn-primary" href="#work">View selected work <Arrow /></a>
        <a className="btn btn-ghost" href={`mailto:${profile.email}`}><Mail /> Let's talk</a>
      </motion.div>

      <motion.dl className="hero-meta" {...fade(0.9)}>
        <div><dt>Focus</dt><dd>Product &amp; web design</dd></div>
        <div><dt>Craft</dt><dd>Figma · Design systems</dd></div>
        <div><dt>Standard</dt><dd>WCAG accessibility</dd></div>
        <div><dt>Edge</dt><dd>UX strategy · CRO</dd></div>
      </motion.dl>
    </header>
  )
}
