import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EpubCraft',
  tagline: 'Professional EPUB Editor & Publisher',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://epubcraft.vercel.app',
  baseUrl: '/',

  organizationName: 'AkaHitsuworker',
  projectName: 'EpubCraft',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th'],
    localeConfigs: {
      en: { label: 'English' },
      th: { label: 'ไทย', htmlLang: 'th' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/icon.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'EpubCraft',
      logo: {
        alt: 'EpubCraft Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Core Features',
              to: '/docs/core-features/editor',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Web App',
              href: 'https://epubcraft.vercel.app',
            },
            {
              label: 'Mirror',
              href: 'https://epubcraft.pages.dev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EpubCraft. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
