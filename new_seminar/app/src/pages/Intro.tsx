import Hero from '../components/hero/Hero';
import { ModuleCard } from '../components/cards/ModuleCard';
import SectionsStrip from '../components/layout/SectionsStrip';
import { ModuleGrid } from '../components/grid/ModuleGrid';
import { introPage } from '../data/pages/intro';
import { useTranslation } from '../hooks/useTranslation';

const IntroPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero {...introPage.hero} />
      <SectionsStrip />
      <div className="intro-container">
        <ModuleGrid>
          {introPage.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <ModuleCard
              icon={section.icon}
              iconAltKey={section.iconAltKey}
              badgeKey={section.badgeKey}
              titleKey={section.titleKey}
            >
              {section.paragraphs.map((p) => (
                <p key={p}>{t(p)}</p>
              ))}
              {section.htmlKey ? (
                <div className="intro-html" dangerouslySetInnerHTML={{ __html: t(section.htmlKey) }} />
              ) : null}
            </ModuleCard>
          </section>
        ))}
        </ModuleGrid>
      </div>
    </>
  );
};

export default IntroPage;
