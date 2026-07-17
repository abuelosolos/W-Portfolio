import { useMobileNav } from '../hooks/useMobileNav';

export function Nav() {
  const { open, toggle, close } = useMobileNav();

  const handleLinkClick = () => close();

  return (
    <>
      <header className="site-nav" id="nav">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">Kumasi<span>.</span></a>

          <button className={`nav-toggle hamburger-btn ${open ? 'open' : ''}`} type="button" aria-label="Open navigation" aria-expanded={open} onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about" className="nav-link" onClick={handleLinkClick}>About</a>
            <a href="#work" className="nav-link" onClick={handleLinkClick}>Projects</a>
            <a href="#art" className="nav-link" onClick={handleLinkClick}>Art</a>
            <a href="#connect" className="nav-link" onClick={handleLinkClick}>Connect</a>
          </nav>

          <div className="nav-social">
            <a href="mailto:kbatomate@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="https://x.com/abuelosolos" target="_blank" rel="noopener" aria-label="X">
              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com/in/heisabuelo" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://behance.net/abuelosolos" target="_blank" rel="noopener" aria-label="Behance">
              <svg viewBox="0 0 24 24"><path d="M7.5 10.5c.97 0 1.75-.78 1.75-1.75S8.47 7 7.5 7H3v3.5h4.5zm.25 3.25c0-1.1-.9-2-2-2H3V16h2.75c1.1 0 2-.9 2-2zM2 5h6c2.2 0 4 1.8 4 4 0 1.1-.45 2.1-1.17 2.83C12.17 12.5 13 13.67 13 15c0 2.2-1.8 4-4 4H2V5zm15 9h5.5c-.28 1.4-1.56 2.5-3 2.5-1.38 0-2.5-.9-3-2.5H17zm-1.5-1c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .34-.04.67-.1 1H15.6c-.1-.33-.1-.67-.1-1zm4.5-3c-1.38 0-2.5 1.12-2.5 2.5H22.5C22.5 11.12 21.38 10 20 10zm-2.25-3.5h4.5v1H17.75v-1z"/></svg>
            </a>
          </div>
        </div>
      </header>

      <div className={`mobile-nav-dropdown ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mobile-nav-dropdown-inner">
          <a className="mobile-nav-row" href="#about" onClick={() => { close(); }}>About</a>
          <a className="mobile-nav-row" href="#work" onClick={() => { close(); }}>Projects</a>
          <a className="mobile-nav-row" href="#art" onClick={() => { close(); }}>Art</a>
          <a className="mobile-nav-row" href="#connect" onClick={() => { close(); }}>Connect</a>
          <div className="mobile-nav-divider"></div>
          <a className="mobile-nav-row" href="mailto:kbatomate@gmail.com" onClick={() => { close(); }}>
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>Email</span>
          </a>
          <a className="mobile-nav-row" href="https://x.com/abuelosolos" target="_blank" rel="noopener" onClick={() => { close(); }}>
            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span>X</span>
          </a>
          <a className="mobile-nav-row" href="https://linkedin.com/in/heisabuelo" target="_blank" rel="noopener" onClick={() => { close(); }}>
            <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            <span>LinkedIn</span>
          </a>
          <a className="mobile-nav-row" href="https://behance.net/abuelosolos" target="_blank" rel="noopener" onClick={() => { close(); }}>
            <svg viewBox="0 0 24 24"><path d="M7.5 10.5c.97 0 1.75-.78 1.75-1.75S8.47 7 7.5 7H3v3.5h4.5zm.25 3.25c0-1.1-.9-2-2-2H3V16h2.75c1.1 0 2-.9 2-2zM2 5h6c2.2 0 4 1.8 4 4 0 1.1-.45 2.1-1.17 2.83C12.17 12.5 13 13.67 13 15c0 2.2-1.8 4-4 4H2V5zm15 9h5.5c-.28 1.4-1.56 2.5-3 2.5-1.38 0-2.5-.9-3-2.5H17zm-1.5-1c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .34-.04.67-.1 1H15.6c-.1-.33-.1-.67-.1-1zm4.5-3c-1.38 0-2.5 1.12-2.5 2.5H22.5C22.5 11.12 21.38 10 20 10zm-2.25-3.5h4.5v1H17.75v-1z"/></svg>
            <span>Behance</span>
          </a>
        </div>
      </div>
    </>
  );
}
