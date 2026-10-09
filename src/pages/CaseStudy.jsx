import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { Img } from '../components/Img';
import { Connect } from '../components/Connect';
import { getProject } from '../data/projects';
import { useReveal } from '../hooks/useReveal';

function Carousel({ images, title }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const go = (i) => setIndex(((i % total) + total) % total);
  let touchX = 0;

  return (
    <div
      className="case-carousel"
      tabIndex={total > 1 ? 0 : undefined}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(index - 1);
        if (e.key === 'ArrowRight') go(index + 1);
      }}
      onTouchStart={(e) => { touchX = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const diff = touchX - e.changedTouches[0].clientX;
        if (total > 1 && Math.abs(diff) > 40) go(index + (diff > 0 ? 1 : -1));
      }}
    >
      <div className="case-carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div className="case-carousel-slide" key={i} aria-hidden={i !== index}>
            <Img src={src} alt={`${title} screen ${i + 1}`} />
          </div>
        ))}
      </div>
      {total > 1 && (
        <>
          <button type="button" className="case-carousel-btn prev" aria-label="Previous image" onClick={() => go(index - 1)}>
            <Icon name="caretLeftLg" />
          </button>
          <button type="button" className="case-carousel-btn next" aria-label="Next image" onClick={() => go(index + 1)}>
            <Icon name="caretLeftLg" style={{ transform: 'rotate(180deg)' }} />
          </button>
        </>
      )}
    </div>
  );
}

function Block({ title, children }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`case-block reveal ${visible ? 'visible' : ''}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

const paragraphs = (text) => text.split('\n\n').map((t, i) => <p key={i}>{t}</p>);

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="case case-notfound">
        <Link to="/#work" className="back-link"><Icon name="caretLeft" /> Back to projects</Link>
        <h1 className="case-title">Project not found</h1>
        <p className="case-summary">{slug ? <>We couldn&apos;t find a project called &ldquo;{slug}&rdquo;.</> : 'That page does not exist.'}</p>
      </main>
    );
  }

  const images = project.gallery?.length ? project.gallery : [project.heroImage];

  return (
    <>
      <main className="case">
        <Link to="/#work" className="back-link"><Icon name="caretLeft" /> Back to projects</Link>

        <div className="case-head">
          <h1 className="case-title">/{project.title}</h1>
          <div className="case-actions">
            {project.codeUrl ? (
              <a className="pill pill-action" href={project.codeUrl} target="_blank" rel="noopener"><Icon name="github" size={15} /> View Code</a>
            ) : (
              <span className="pill pill-action is-disabled"><Icon name="github" size={15} /> View Code</span>
            )}
            {project.liveUrl ? (
              <a className="pill pill-live" href={project.liveUrl} target="_blank" rel="noopener"><Icon name="arrowUpRight" /> View Live</a>
            ) : (
              <span className="pill pill-live is-disabled"><Icon name="arrowUpRight" /> View Live</span>
            )}
            {project.behanceUrl && (
              <a className="pill pill-action" href={project.behanceUrl} target="_blank" rel="noopener"><Icon name="behance" size={15} /> Behance</a>
            )}
            {project.status && <span className="case-status">{project.status}</span>}
          </div>
        </div>

        <Carousel images={images} title={project.title} />

        <ul className="case-tags" aria-label="Technologies">
          {project.tags.map((t) => <li className="pill" key={t}>{t}</li>)}
        </ul>

        <p className="case-summary">{project.shortDescription}</p>

        <div className="case-sections">
          <Block title="The Challenge">{paragraphs(project.challenge)}</Block>
          <Block title="The Solution">{paragraphs(project.solution)}</Block>
          <Block title="Key Features">
            <div className="case-grid">
              {project.keyFeatures.map((f) => (
                <div className="feature-card" key={f.title}><p><strong>{f.title}:</strong> {f.description}</p></div>
              ))}
            </div>
          </Block>
          <Block title="Tech Stack">
            <div className="case-grid">
              {project.techStack.map((t) => (
                <div className="bullet-row" key={t}><span className="dot" /><p>{t}</p></div>
              ))}
            </div>
          </Block>
        </div>
      </main>
      <Connect />
    </>
  );
}
