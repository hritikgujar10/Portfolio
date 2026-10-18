import { useEffect, useState } from 'react'

const links = [
  ['Work', 'work'],
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav className={`nav ${scrolled || open ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={close}>Hritik Gujar</a>
        <div className="nav-links" id="nav-links">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={close}>{label}</a>
          ))}
          <a
            href="/Hritik-Gujar-Product-Designer-Resume.pdf"
            className="nav-resume"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Resume
          </a>
          <a href="#contact" className="nav-cta" onClick={close}>Get in touch</a>
        </div>
        <button
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
    </nav>
  )
}
