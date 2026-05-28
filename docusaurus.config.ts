import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repository = process.env.GITHUB_REPOSITORY ?? 'username/pos-docs';
const [organizationName, projectName = 'pos-docs'] = repository.split('/');
const isUserOrOrgPage =
  projectName.toLowerCase() === `${organizationName}.github.io`.toLowerCase();

const config: Config = {
  title: 'Modul Asdos POS',
  tagline: 'Materi praktikum Pemrograman Open Source untuk R dan Python',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: process.env.SITE_URL ?? `https://${organizationName}.github.io`,
  baseUrl:
    process.env.BASE_URL ??
    (process.env.GITHUB_ACTIONS && !isUserOrOrgPage ? `/${projectName}/` : '/'),

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
