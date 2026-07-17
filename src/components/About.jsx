import { useReveal } from '../hooks/useReveal';

const tools = [
  'Figma',
  'React Native',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Ibis Paint',
  'Expo',
  'Poppins (lol)',
];

export function About() {
  const [ref, visible] = useReveal();

  return (
    <section className="section" id="about" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <div className="section-heading">
          <span className="section-label">/ about me</span>
          <span className="section-rule"></span>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>I&apos;m a <span className="accent">Product Designer</span> and <span className="accent">Digital Illustrator</span> from <span className="accent">Port Harcourt</span> city. I&apos;m currently studying Computer Science at the <span className="accent">University of Port Harcourt</span>.</p>
            <p>In my free time, I&apos;m illustrating characters in <span className="accent">Ibis</span>, reading <span className="accent">manhwa</span>, and getting clipped in mobile FPS games.</p>
            <p className="about-tools">Here are some tools and technologies I work with: </p>
          </div> 
          <div className="tag-list" aria-label="Skills list">
            {tools.map((tool) => (
              <div className="tag-item" key={tool}><span className="tag-triangle">▸</span> {tool}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
