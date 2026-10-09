import { Link } from 'react-router-dom';
import { useMobileNav } from '../hooks/useMobileNav';
import { Icon } from './Icon';
import { socials } from '../data/socials';

const links = [
  { label: 'about', hash: '#about' },
  { label: 'projects', hash: '#work' },
  { label: 'collection', hash: '#art' },
];

export function Nav() {
  const { open, toggle, close } = useMobileNav();

  return (
    <>
      <header className="site-nav" id="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <Link to="/" className="nav-logo" onClick={close}>Kumasi.</Link>

            <nav className="nav-links" aria-label="Primary navigation">
              {links.map((l) => (
                <Link key={l.hash} to={{ pathname: '/', hash: l.hash }} className="nav-link">{l.label}</Link>
              ))}
            </nav>
          </div>

          <button className={`nav-toggle hamburger-btn ${open ? 'open' : ''}`} type="button" aria-label="Open navigation" aria-expanded={open} onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="nav-social">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener" aria-label={s.label} className="icon-link">
                <Icon name={s.name} />
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className={`mobile-nav-dropdown ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mobile-nav-dropdown-inner">
          {links.map((l) => (
            <Link key={l.hash} className="mobile-nav-row" to={{ pathname: '/', hash: l.hash }} onClick={close}>{l.label}</Link>
          ))}
          <div className="mobile-nav-divider"></div>
          {socials.map((s) => (
            <a key={s.name} className="mobile-nav-row icon-link" href={s.href} target="_blank" rel="noopener" onClick={close}>
              <Icon name={s.name} />
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
