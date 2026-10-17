import { work } from '../data/content'
import Reveal from './Reveal'
import { Arrow } from './Icons'

export default function Work() {
  return (
    <section className="section container" id="work">
      <div className="section-head">
        <div>
          <Reveal><span className="eyebrow">Selected Work</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">Live websites, designed <em>and</em> shipped.</h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="section-lead">
            Recent builds across travel, SaaS, fitness, healthcare and D2C e-commerce.
            Every one is live, so click through and try it.
          </p>
        </Reveal>
      </div>

      <div className="work-grid">
        {work.map((p, i) => (
          <Reveal
            key={p.name}
            delay={0.04 + (i % 2) * 0.08}
            className={`work-item${i === 0 ? ' featured' : ''}`}
          >
            <a className="work-card" href={p.url} target="_blank" rel="noopener noreferrer">
              <div className="work-shot">
                <div className="work-chrome" aria-hidden="true">
                  <span /><span /><span />
                  <em>{new URL(p.url).host}</em>
                </div>
                <div className="work-img">
                  <img
                    src={p.image}
                    alt={`${p.name} homepage`}
                    width="1440"
                    height="900"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
                <span className="work-visit">Visit site <Arrow /></span>
              </div>
              <div className="work-info">
                <div className="work-meta">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span>{p.category}</span>
                  <span>{p.year}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
                <div className="tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
