import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repository = 'kkafi09/pos-docs';
const [organizationName, projectName] = repository.split('/');

const config: Config = {
  title: 'Modul Asdos POS',
  tagline: 'Materi praktikum Pemrograman Open Source untuk R dan Python',
  favicon: 'img/logo.svg',
  future: {
    v4: true,
  },
  url: 'https://pos.kafi.gg',
  baseUrl: '/',

  organizationName,
  projectName,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Modul Asdos POS',
      logo: {
        alt: 'Logo Modul Asdos POS',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Materi',
        },
        {
          href: `https://github.com/${repository}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright (c) ${new Date().getFullYear()} Modul Asdos Pemrograman Open Source.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
