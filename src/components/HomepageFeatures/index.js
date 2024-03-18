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
        Enigma arrangerer alt av det sosiale som skjer på ITØK. Bedriftspresentasjoner, hytteturer, fester og mye mer! 
      </>
    ),
    href: '/docs/Komiteer/Arrangement'
  },
  {
    title: 'Komitéer & undergrupper',
    Img: GiHiking,
    description: (
      <>
        Vi har flere komitéer og undergrupper, og flere er på vei! Finner du ikke en gruppe for deg? Vi setter stor pris på nye forslag, og bidrar gjerne med etableringen av nye grupper!
      </>
    ),
    href: '/docs/Undergrupper/Fintech Enigma'
  },
  {
    title: 'Kontakt med næringslivet',
    Img: MdOutlineBusinessCenter ,
    description: (
      <>
        Gjennom blant anent bedriftspresentasjoner og workshops bidrar Enigmas bedriftskomité til det tette båndet mellom studentene på ITØK og næringslivet.
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
