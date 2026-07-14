import { motion } from 'framer-motion'

const words = ['User Flows', 'Design Systems', 'Prototyping', 'Accessibility', 'Wireframing', 'Information Architecture', 'CRO', 'Mobile App Design']

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
      >
        {row.map((w, i) => (
          <span className="marquee-item" key={i}>{w} <span>✦</span></span>
        ))}
      </motion.div>
    </div>
  )
}
