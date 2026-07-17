import { useMemo, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const tabs = [
  {
    label: 'Roomly Dashboard',
    role: 'Freelance UI/UX Designer',
    date: '2025',
    bullets: [
      'Designed a full hotel management dashboard as a freelance project',
      'Covered revenue analytics, room occupancy tracking, and guest management',
      'Delivered a complete UI system',
    ],
  },
  {
    label: "G'Scapes Engine",
    role: 'UI/UX Design — Personal Project',
    date: '2026',
    bullets: [
      'Designed the full UI for an AI-powered game development engine',
      'Covered onboarding, workspace layout, build setup, and learning module',
      'Built to test and showcase product design skills at a complex tool level',
      'Published as a Behance case study',
    ],
    easter: '(Made this for a presentation of skill, not a client job.)',
  },
  {
    label: 'Web3 DeFi App',
    role: 'UI/UX Design — Personal Project',
    date: '2025',
    bullets: [
      'Designed a mobile crypto wallet interface covering token swap, NFT collection, and trade screens',
      'Explored DeFi UX patterns — balancing complexity with clarity for non-technical users',
      'Built to test and demonstrate fintech and Web3 design ability',
    ],
    easter: '(Another presentation of skill.)',
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const [ref, visible] = useReveal();
  const activePanel = useMemo(() => tabs.find((item) => item.label === activeTab) || tabs[0], [activeTab]);

  return (
    <section className="section" id="experience" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <div className="section-heading">
          <span className="section-label">/ experience</span>
          <span className="section-rule"></span>
        </div>

        <div className="experience-grid">
          <div className="experience-tabs" role="tablist" aria-label="Experience tabs">
            {tabs.map((item) => (
              <button
                key={item.label}
                className={`experience-tab ${activeTab === item.label ? 'active' : ''}`}
                type="button"
                data-tab={item.label}
                role="tab"
                aria-selected={activeTab === item.label}
                onClick={() => setActiveTab(item.label)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="experience-panels">
            <article className="experience-panel active" role="tabpanel">
              <h3>{activePanel.label}</h3>
              <p className="experience-role">{activePanel.role === 'Freelance UI/UX Designer' ? <>Freelance <span className="accent">UI/UX Designer</span></> : activePanel.role === 'UI/UX Design — Personal Project' ? <>UI/UX Design — <span className="accent">Personal Project</span></> : activePanel.role}</p>
              <p className="experience-date">{activePanel.date}</p>
              <ul>
                {activePanel.bullets.map((item) => (
                  <li key={item}><span className="bullet">▸</span> {item}</li>
                ))}
              </ul>
              {activePanel.easter ? <p className="experience-easter">{activePanel.easter}</p> : null}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
