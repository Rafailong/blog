// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ravila\' blog',
  url: 'https://rafailong.github.io',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Rafailong', // Usually your GitHub org/user name.
  projectName: 'blog',
  deploymentBranch: 'deployment',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogTitle: 'ravila\' blog!',
          blogDescription: 'A Docusaurus powered blog!',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ravila\' blog',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'code',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Rafailong',
              }
            ]
          },
          {
            title: 'social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/___ravila',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ravila\' blog. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['haskell', 'java', 'scala', 'kotlin'],
      },
    }),
};

module.exports = config;
