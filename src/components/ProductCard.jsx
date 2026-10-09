import { Link } from 'react-router-dom';
import { Img } from './Img';
import { Icon } from './Icon';
import { CaseStudyBtn } from './CaseStudyBtn';
import { useReveal } from '../hooks/useReveal';

export function ProductCard({ project, index = 0 }) {
  const [ref, visible] = useReveal(0.15);
  const to = `/project/${project.slug}`;

  return (
    <article
      ref={ref}
      className={`product-card reveal-item ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
    >
      <Link to={to} className="product-card-media" aria-label={`${project.title} case study`}>
        <span className="product-card-img"><Img src={project.thumbnail} alt={project.title} loading="lazy" /></span>
      </Link>
      <div className="product-card-body">
        <div className="product-card-head">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
        <p className="product-card-desc">{project.shortDescription}</p>
        <div className="product-card-links">
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener" aria-label={`${project.title} source code`} className="icon-link"><Icon name="github" /></a>
          )}
          {project.behanceUrl && (
            <a href={project.behanceUrl} target="_blank" rel="noopener" aria-label={`${project.title} on Behance`} className="icon-link"><Icon name="behance" /></a>
          )}
        </div>
        <CaseStudyBtn to={to} />
      </div>
    </article>
  );
}
