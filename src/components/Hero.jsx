import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { Arrow, Mail } from './Icons'

const rise = {
  hidden: { y: 48, opacity: 0 },
  show: (i) => ({ y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.09 } }),
}

export default function Hero() {
  return (
    <header className="hero container" id="top">
      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="dot" /> Available for UI/UX roles · {profile.location}
      </motion.div>

      <h1 className="hero-title">
        <span className="line"><motion.span style={{ display: 'inline-block' }} variants={rise} custom={0} initial="hidden" animate="show">Product</motion.span></span>
        <span className="line"><motion.span style={{ display: 'inline-block' }} className="accent" variants={rise} custom={1} initial="hidden" animate="show">designer</motion.span></span>
        <span className="line"><motion.span style={{ display: 'inline-block' }} className="outline" variants={rise} custom={2} initial="hidden" animate="show">who ships.</motion.span></span>
      </h1>

      <motion.p
        className="hero-sub"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        I'm <strong>{profile.firstName}</strong>, a UI/UX Product Designer with 3+ years turning
        messy requirements into <strong>intuitive, accessible, data-rich</strong> experiences
        across healthcare, B2B, and analytics.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
      >
        <a className="btn btn-primary" href="#projects">View my work <Arrow /></a>
        <a className="btn btn-ghost" href={`mailto:${profile.email}`}><Mail /> Let's talk</a>
      </motion.div>

      <motion.div
        className="hero-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div><span className="k">01</span> &nbsp;Figma · Design Systems</div>
        <div><span className="k">02</span> &nbsp;WCAG Accessibility</div>
        <div><span className="k">03</span> &nbsp;UX Strategy · CRO</div>
      </motion.div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <span className="bar" />
      </div>
    </header>
  )
}
