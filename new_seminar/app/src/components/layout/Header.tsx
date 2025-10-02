import styles from './Header.module.css';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <header className={styles.header} data-component="site-header">
      <div className={styles.inner}>
        <a className={styles.brand} href="/">
          <span className={styles.logo} aria-hidden>NGO</span>
          <span className={styles.brandName}>Seminar</span>
        </a>
        <nav className={styles.nav}>
          <a href="#hero">Home</a>
          <a href="#program">Program</a>
          <a href="#modules">Modules</a>
          <a href="#resources">Resources</a>
        </nav>
        <div className={styles.controls}>
          <div className={styles.langSwitch} role="group" aria-label="Language switcher">
            <button
              type="button"
              className={language === 'ru' ? styles.active : ''}
              onClick={() => setLanguage('ru')}
            >
              RU
            </button>
            <button
              type="button"
              className={language === 'en' ? styles.active : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
          <button type="button" className={styles.themeToggle} onClick={toggleTheme}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
