import { Link } from 'react-router-dom';
import { Icon } from './Icon';

// Figma "CaseStudyBtn": Default = Text Primary; hover (inferred "Variant2") = Surface Alt; the text slides toward the arrow while the arrow stays still.
// Pass `to` for an in-app route or `href` for an external link.
export function CaseStudyBtn({ to, href, children = 'Read Case Study', className = '' }) {
  const inner = (
    <>
      <span className="case-btn-text">{children}</span>
      <span className="case-btn-arrow"><Icon name="arrowDiagonal" size={12} style={{ transform: 'rotate(-45deg)' }} /></span>
    </>
  );
  if (href) {
    return <a href={href} target="_blank" rel="noopener" className={`case-btn ${className}`}>{inner}</a>;
  }
  return <Link to={to} className={`case-btn ${className}`}>{inner}</Link>;
}
