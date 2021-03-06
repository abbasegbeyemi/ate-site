const url = 'https://theatenetwork.com';
const siteMetadata = {
    title: 'African Tech Enthusiasts',
    description:
        'African tech enthusiasts. Empowering African youth through technology',
    author: '@sheybass',
    url: url,
    image: `${url}/icons/icon_512x512.png`,
    keywords: ['technology', 'africa', 'youth', 'community', 'network'],
    navbarLinks: [
        {
            name: 'Articles',
            url: '/articles',
        },
        {
            name: 'Events',
            url: '/events',
        },
        {
            name: 'The Team',
            url: '/bios',
        },
    ],
    social: [
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/groups/8962751/',
        },
        {
            name: 'youtube',
            url: 'https://www.youtube.com/channel/UCdc5VTFzZQh1laVievU4gow',
        },
        {
            name: 'email',
            url: 'mailto: afri.techent@gmail.com',
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
    'gatsby-plugin-remove-trailing-slashes',
    {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
            modulePath: `${__dirname}/src/cms/netlify.js`,
        },
    },
    {
        resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts: {
                default: require.resolve(
                    './src/templates/default-template.tsx',
                ),
            },
            gatsbyRemarkPlugins: [
                'gatsby-remark-unwrap-images',
                {
                    resolve: 'gatsby-remark-images',
                    options: {
                        maxWidth: 1380,
                    },
                },
            ],
            plugins: [
                {
                    resolve: 'gatsby-remark-images',
                    options: {
                        backgroundColor: 'transparent',
                    },
                },
            ],
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'bios',
            path: `${__dirname}/content/bios`,
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'articles',
            path: `${__dirname}/content/articles`,
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'events',
            path: `${__dirname}/content/events`,
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            path: `${__dirname}/src/images`,
            name: 'images',
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            path: `${__dirname}/src/data`,
            name: 'site-data',
        },
    },
    {
        resolve: 'gatsby-plugin-react-svg',
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

const mapping = {
    'Mdx.frontmatter.author': 'Mdx.frontmatter.username',
    'Mdx.frontmatter.contributors': 'Mdx.frontmatter.username',
};

module.exports = {
    plugins: plugins,
    siteMetadata: siteMetadata,
    mapping: mapping,
};
