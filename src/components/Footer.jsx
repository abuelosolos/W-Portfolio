export function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container footer-top">
        <div>
          <div className="foot-brand">Kumasi<span>.</span></div>
          <p className="foot-tag">Designed by Kumasi.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#connect">Connect</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span className="foot-copy">2026 Kumasi. All rights reserved.</span>
        <div className="foot-status"><span className="live-dot"></span><span className="accent">Available for hire</span></div>
      </div>
    </footer>
  );
}
