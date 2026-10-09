import { useReveal } from '../hooks/useReveal';
import { Icon } from './Icon';
import { socials } from '../data/socials';

export function Connect() {
  const [ref, visible] = useReveal();

  return (
    <section className="section" id="connect" ref={ref}>
      <div className="container">
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="title-body">
            <h2 className="section-title">/connect with kumasi</h2>
            <p className="section-sub">Are you hiring or interested in working together?. Let’s bring some cool ideas to life</p>
          </div>
        </div>

        <div className="connect-grid">
          {socials.map((s, i) => (
            <a
              key={s.name}
              className={`connect-link icon-link reveal-item ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${150 + i * 90}ms` }}
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={s.label}
            >
              <Icon name={s.name} size={30} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
