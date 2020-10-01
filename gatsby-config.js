const siteUrl = 'https://theatenetwork.com';
const siteMetadata = {
  siteTitle: 'African Tech Enthusiasts',
  siteDescription:
    'African tech enthusiasts. Empowering african youth through technology',
  siteAuthor: '@sheybass',
  siteUrl: siteUrl,
  siteImage: `${siteUrl}/icons/icon_512x512.png`,
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
};

const plugins = [
  'gatsby-plugin-theme-ui',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-react-helmet',
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
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `African Tech Enthusiasts`,
      short_name: `theATEnetwork`,
      start_url: `/`,
      background_color: `#029E9E`,
      theme_color: `#029E9E`,
      display: `minimal-ui`,
      icon: `./src/images/logo-circled.png`, // This path is relative to the root of the site.
      icons: [
        {
          src: 'icons/icon_512x512.png',
          sizes: '512x512',
          types: 'image/png',
        },
        {
          src: 'icons/icon_192x192.png',
          sizes: '192x192',
          types: 'image/png',
        },
      ],
    },
  },
  'gatsby-plugin-offline',
];

module.exports = {
  plugins: plugins,
  siteMetadata: siteMetadata,
};
