import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type MetaItem = {
  name: string;
  content: string;
};

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  author?: string;
  keywords?: string;
  meta?: MetaItem[];
  image?: string;
};

const SEO: React.FC<SEOProps> = (props) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteAuthor
          siteUrl
          siteKeywords
        }
      }
    }
  `);
  const { siteMetadata } = data.site;

  const {
    siteTitle,
    siteDescription,
    siteUrl,
    siteAuthor,
    meta = [],
    siteKeywords,
    // image,
  } = siteMetadata;

  const title = props.title;
  const description = props.description || siteDescription;
  // const siteImage = props.image || image;
  const keywords = [...siteKeywords, props.keywords].join(',');

  const metaData = [
    {
      name: 'canonical',
      content: siteUrl,
    },
    {
      name: 'description',
      content: description,
    },
    // {
    //   name: 'image',
    //   content: siteImage,
    // },
    {
      name: 'og:url',
      content: siteUrl,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:title',
      content: siteTitle,
    },
    {
      name: 'og:description',
      content: siteDescription,
    },
    // {
    //   name: 'og:image',
    //   content: siteImage,
    // },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:creator',
      content: siteAuthor,
    },
    {
      name: 'twitter:title',
      content: siteTitle,
    },
    {
      name: 'twitter:description',
      content: siteDescription,
    },
    // {
    //   name: 'twitter:image',
    //   content: siteImage,
    // },
    {
      name: 'keywords',
      content: keywords,
    },
  ].concat(meta);

  const linkData = [
    {
      rel: 'shortcut icon',
      href: 'favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: 'icons/apple-touch-logo.png',
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Merriweather+Sans:wght@300;400;600;700&display=swap',
    },
  ];
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={metaData}
      link={linkData}
    />
  );
};

export default SEO;
