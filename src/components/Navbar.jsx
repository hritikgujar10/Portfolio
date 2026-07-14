import { useEffect, useState } from 'react'

const links = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Work', 'experience'],
  ['Projects', 'projects'],
  ['Education', 'education'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo">Hritik<span>.</span></a>
      <div className="nav-links">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
        <a href="#contact" className="nav-cta">Get in touch</a>
      </div>
    </nav>
  )
}
