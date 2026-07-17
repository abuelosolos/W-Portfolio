import { useReveal } from '../hooks/useReveal';

export function Connect() {
  const [ref, visible] = useReveal();

  return (
    <section className="section" id="connect" ref={ref}>
      <div className={`container reveal ${visible ? 'visible' : ''}`}>
        <div className="section-heading">
          <span className="section-label">/ connect</span>
          <span className="section-rule"></span>
        </div>

        <div className="connect-grid">
          <a className="connect-link" href="mailto:kbatomate@gmail.com" data-label="Email">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
          <a className="connect-link" href="https://x.com/abuelosolos" target="_blank" rel="noopener" data-label="X">
            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a className="connect-link" href="https://linkedin.com/in/heisabuelo" target="_blank" rel="noopener" data-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a className="connect-link" href="https://behance.net/abuelosolos" target="_blank" rel="noopener" data-label="Behance">
            <svg viewBox="0 0 24 24"><path d="M7.5 10.5c.97 0 1.75-.78 1.75-1.75S8.47 7 7.5 7H3v3.5h4.5zm.25 3.25c0-1.1-.9-2-2-2H3V16h2.75c1.1 0 2-.9 2-2zM2 5h6c2.2 0 4 1.8 4 4 0 1.1-.45 2.1-1.17 2.83C12.17 12.5 13 13.67 13 15c0 2.2-1.8 4-4 4H2V5zm15 9h5.5c-.28 1.4-1.56 2.5-3 2.5-1.38 0-2.5-.9-3-2.5H17zm-1.5-1c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .34-.04.67-.1 1H15.6c-.1-.33-.1-.67-.1-1zm4.5-3c-1.38 0-2.5 1.12-2.5 2.5H22.5C22.5 11.12 21.38 10 20 10zm-2.25-3.5h4.5v1H17.75v-1z"/></svg>
          </a>
          <a className="connect-link" href="https://pinterest.com/HeisAbuelo" target="_blank" rel="noopener" data-label="Pinterest">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.135-1.867 3.135-4.56 0-2.385-1.714-4.052-4.163-4.052-2.836 0-4.498 2.126-4.498 4.322 0 .856.33 1.772.741 2.272.081.099.093.185.069.285-.076.311-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
