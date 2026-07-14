import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    let rx = 0, ry = 0, x = 0, y = 0, raf

    const move = (e) => {
      x = e.clientX; y = e.clientY
    }
    const loop = () => {
      rx += (x - rx) * 0.28; ry += (y - ry) * 0.28
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    const over = (e) => {
      if (e.target.closest('a, button, .skill-card, .project-card, .stat, .cert-item')) {
        ring.current?.classList.add('hover')
      }
    }
    const out = () => ring.current?.classList.remove('hover')

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ring} className="cursor-ring" />
}
