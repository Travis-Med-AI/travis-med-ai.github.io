const site_url = 'https://travis-med-ai.github.io/'
const github_url = 'https://github.com/Travis-Med-AI/med-ai'
const title = 'Travis Med AI'
const icon = 'https://raw.githubusercontent.com/Travis-Med-AI/med-ai/jacob/logo.svg'
const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: site_url,
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: icon,
    logoLink: site_url,
    title:
      title,
    githubUrl: github_url,
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/quickstart',
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: title, link: site_url }],
    frontline: false,
    ignoreIndex: true,
    title:
      title,
  },
  siteMetadata: {
    title: title,
    description: 'Simplifying AI in the Clinical Setting',
    ogImage: null,
    docsLocation: 'https://github.com/Travis-Med-AI/travis-med-ai.github.io/tree/master/content',
    favicon: icon,
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Travis Med AI',
      short_name: 'TravisAI',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
