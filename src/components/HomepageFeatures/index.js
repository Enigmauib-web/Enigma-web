import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { TbFriends } from "react-icons/tb";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiHiking } from "react-icons/gi";

const FeatureList = [
  {
    title: 'Sosialt',
    Img: TbFriends,
    description: (
      <>
        Engima står for alt det sosiale som skjer på ITØK, inkludert spennede studieturer og den årlige hytteturen til Geilo. 
      </>
    ),
    href: '/docs/Komiteer/Arrangement'
  },
  {
    title: 'Komitèer og Interessegrupper',
    Img: GiHiking,
    description: (
      <>
        Per i dag har Enigmastyret tre komitèer og fire undergrupper. Alt for enhver smak, og vi er åpne for å starte flere!
      </>
    ),
    href: '/docs/Undergrupper/Fintech Enigma'
  },
  {
    title: 'Kontakt med næringslivet',
    Img: MdOutlineBusinessCenter ,
    description: (
      <>
        Enigmas egen bedriftskomitè sørger for nær kontakt med næringslivet, samt arrangering av bedriftspresentasjoner o.l.
      </>
    ),
    href: '/docs/Komiteer/Bedrift'
  },
];

function Feature({Img, title, description, href}) {
  return (
    <a className={clsx('col col--4' + " " + styles.featureContainer)} href={href} style={{textDecoration: 'none'}}>
      <div className={"text--center"}>
        <Img className={styles.Img} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p style={{color: 'black'}}>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={"container"} style={{cursor: 'pointer'}}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
