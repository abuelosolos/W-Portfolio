import { useReveal } from '../hooks/useReveal';
import { toolIcons } from '../assets/icons';

const tools = ['claude', 'nodejs', 'react', 'figma', 'ibisPaint', 'nextjs'];

export function About() {
  const [ref, visible] = useReveal();

  return (
    <section className="section about" id="about" ref={ref}>
      <div className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="container about-header">
          <h2 className="section-title">/about me.</h2>
        </div>

        <div className="dashes" aria-hidden="true"></div>

        <div className="container about-inner">
          <p className="about-copy">
            I&apos;m a <span className="em">Product Designer, Developer</span> and <span className="em">Digital Illustrator</span> from Port Harcourt city. <br />
            I&apos;m currently studying <span className="em">Computer Science</span> at the University of Port Harcourt. <br />
            In my free time, I&apos;m illustrating characters in <span className="em">Ibis</span>, reading manhwa, and getting clipped in mobile FPS games.
          </p>

          <div className="about-tools">
            <p className="about-copy">Some tools &amp; technologies I work with:</p>
            <ul className="tools-row" aria-label="Tools and technologies">
              {tools.map((key) => {
                const t = toolIcons[key];
                return (
                  <li className="tool" key={key}>
                    <img src={t.src} alt={t.alt} width={t.size} height={t.size} />
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="about-copy about-copy-right">
            I design more than I build (off and on), but I do have experience building on both <br />
            <span className="em">front-end</span> and <span className="em">back-end</span> with React/Vite &amp; Node.js
          </p>
        </div>

        <div className="dashes dashes-right" aria-hidden="true"></div>
      </div>
    </section>
  );
}
