export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">hi, <span className="accent">Kumasi</span> here.<span className="cursor">|</span></h1>
          <p className="hero-subtitle">A <span className="accent">UI/UX Designer</span> and <span className="accent">Digital Illustrator</span> from <span className="accent">Port Harcourt</span>. <br /> And a designer who codes. I design simple intuitive interfaces that eliminate complexity and give a smooth and easy feel while navigating.</p>
          <a className="hero-cta" href="mailto:kbatomate@gmail.com">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Say hi!
          </a>
        </div>
      </div>
    </section>
  );
}
