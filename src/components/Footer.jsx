import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { socials } from '../data/socials';

const links = [
  { label: 'about', hash: '#about' },
  { label: 'projects', hash: '#work' },
  { label: 'collection', hash: '#art' },
  { label: 'connect', hash: '#connect' },
];

export function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top"> {/* small brand + icons: mobile only (CSS) */}
        <div className="foot-brand-block">
          <div className="foot-brand">Kumasi.</div>
          <div className="foot-icons">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener" aria-label={s.label} className="icon-link">
                <Icon name={s.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-meta">
          <span className="foot-copy">© Designed and built by Abuelosolos 2026. All Rights Reserved</span>
          <nav className="footer-links" aria-label="Footer navigation">
            {links.map((l) => (
              <Link key={l.hash} to={{ pathname: '/', hash: l.hash }}>{l.label}</Link>
            ))}
          </nav>
        </div>
        <div className="foot-wordmark" aria-hidden="true">Kumasi<span>.</span></div>
      </div>
    </footer>
  );
}
