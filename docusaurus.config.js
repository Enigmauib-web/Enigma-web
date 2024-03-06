// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Enigma, ITØK Linjeforening',
  tagline: 'Dinosaurs are cool',
  favicon: '/img/EnigmaLogo/hovedPngBlueTxt.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Enigmauib-web', // Usually your GitHub org/user name.
  projectName: 'enigma-web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'no',
    locales: ['no'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Hjem',
        logo: {
          alt: 'Enigma Logo',
          src: '/img/EnigmaLogo/hovedPngBlueTxt.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/docs/Om Enigma', label: 'Om Enigma', position: 'left'},
          {to: '/docs/Vedtekter', label: 'Vedtekter', position: 'left'},
          {to: '/docs/Interessegrupper/Fintech Enigma', label: 'Interessegrupper', position: 'left'},
          {to: '/docs/Komiteer/Arrangement', label: 'Komitèer', position: 'left'},
          {to: '/docs/For Bedrifter/Bedriftspresentasjon med Enigma', label: 'For bedrifter', position: 'left'},
          {to: '/docs/For Studenter/Ny Student', label: 'Ny Student?', position: 'left'},

          // {to: '/blog', label: 'Blogg', position: 'left'},
          // {
          //   href: 'https://github.com/enigmauib-web',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Finn oss',
            items: [
              // {
              //   label: 'LinkedIn',
              //   href: '#',
              // },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/enigma.uib/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/enigmaitok/'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Enigmauib-web',
              },
              {
                label: 'Fosswinckels gate 14, 5007 Bergen',
                href: 'https://goo.gl/maps/L6EmoWn5wHDZ9dj96'
              },
              {
                html: `<br>
                  <strong>Kontakt oss</strong>
                `
              },
              {
                label: "Epost",
                href: "mailto: Enigma.forening@gmail.com"
              },
              // {
              //   label: 'Facebook',
              //   href: '#',
              // },
            ],
          },
          {
            title: 'Partnere',
            items: [
             {
               html: `
                  <a href="https://stacc.com" target="_blank"><img src="/img/stacc_logo_red-white.png" style="width: auto; height: 4rem;"></a>
                 `
              },
              // {
              //   html: `
              //     <a href="https://www.soprasteria.no/home" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sopra_Steria_logo.svg/2560px-Sopra_Steria_logo.svg.png" style="width: auto; height: 3rem;"></a>
              //   `
              // },
              // {
              //   html: `
              //     <a href="https://vizir.no/" target="_blank"><img src="/img/vizir.png" style="width: auto; height: 3rem;"></a>
              //   `
              // }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fintech Enigma. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
