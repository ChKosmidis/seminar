import styles from './ModuleStrip.module.css';

const mockModules = [
  { id: '0', label: 'Intro', href: '/modules/0' },
  { id: '1', label: 'Community', href: '/modules/1' },
  { id: '2', label: 'Communications', href: '/modules/2' },
  { id: '3', label: 'Infrastructure', href: '/modules/3' }
];

const ModuleStrip = () => {
  const scroll = (direction: 'prev' | 'next') => {
    const strip = document.querySelector(`[data-module-strip]`);
    if (!strip) return;
    const delta = direction === 'next' ? strip.clientWidth * 0.8 : -strip.clientWidth * 0.8;
    strip.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className={styles.shell}>
      <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={() => scroll('prev')}>
        <span aria-hidden>‹</span>
      </button>
      <div className={styles.strip} data-module-strip>
        {mockModules.map((module) => (
          <a key={module.id} className={styles.link} href={module.href}>
            <span className={styles.index}>{module.id}</span>
            <span>{module.label}</span>
          </a>
        ))}
      </div>
      <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => scroll('next')}>
        <span aria-hidden>›</span>
      </button>
    </div>
  );
};

export default ModuleStrip;
