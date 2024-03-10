import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import CookieConsent from "react-cookie-consent";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heading}>
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.title + 'ehehe'}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hjem`}
      description="Hjemmeside Enigma, linjeforening ITØK.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <CookieConsent buttonText='Jeg forstår'>Denne siden bruker ingen cookies, så din aktivitet her er helt trygg :) Les mer <a target='_blank' href='/docs/Cookie Info'>her</a></CookieConsent>
    </Layout>
  );
}
