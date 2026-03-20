import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img
          src="img/icon.png"
          alt="EpubCraft"
          className={styles.heroLogo}
        />
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          <Translate id="homepage.tagline">
            Professional EPUB Editor &amp; Publisher
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className={styles.primaryButton}
            to="/docs/intro">
            <Translate id="homepage.hero.button.getStarted">
              Get Started
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({id: 'homepage.tagline', message: 'Professional EPUB Editor & Publisher'})}
      description="EpubCraft is a professional EPUB editor and publisher with dual-mode editing, real-time preview, AI-powered content generation, and smart export.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
