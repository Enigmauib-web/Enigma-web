import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { TbFriends, TbBusinessplan  } from "react-icons/tb";
import { GiHiking } from "react-icons/gi";

const FeatureList = [
  {
    title: 'Sosialt',
    Img: TbFriends,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    href: '/docs/Komiteer/Arrangement'
  },
  {
    title: 'Komitèer og Interessegrupper',
    Img: GiHiking,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    href: '/docs/'
  },
  {
    title: 'Kontakt med næringslivet',
    Img: TbBusinessplan ,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    href: '/docs/'
  },
];

function Feature({Img, title, description, href}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Img className={styles.Img} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
