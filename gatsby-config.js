const siteMetadata = {
  siteTitle: 'African Tech Enthusiasts',
  siteDescription:
    'African tech enthusiasts. Empowering african youth through technology',
  siteAuthor: '@sheybass',
  siteUrl: 'https://theatenetwork.com',
  siteKeywords: ['technology', 'africa', 'youth', 'community', 'network'],
  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/groups/8962751/',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCdc5VTFzZQh1laVievU4gow',
    },
  ],
  navBarLinks: [
    {
      name: 'Events',
      url: '/events',
    },
    {
      name: 'Team',
      url: '/our-team',
    },
  ],
};

const plugins = [
  'gatsby-plugin-theme-ui',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-offline',
  'gatsby-plugin-sass',
  'gatsby-transformer-yaml',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/images`,
      name: 'images',
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/data`,
      name: 'site-data',
    },
  },
  {
    resolve: `gatsby-plugin-react-svg`,
    options: {
      rule: {
        include: /\.inline\.svg$/,
        omitKeys: [
          'xmlnsDc',
          'xmlnsCc',
          'xmlnsRdf',
          'xmlnsSerif',
          'xmlnsSvg',
          'xmlnsSodipodi',
          'xmlnsInkscape',
          'xmlnsTermtosvg',
        ],
      },
    },
  },
];

module.exports = {
  plugins: plugins,
  siteMetadata: siteMetadata,
};
