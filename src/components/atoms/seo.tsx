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
          title
          description
          author
          url
          keywords
          image
        }
      }
    }
  `);
  const { siteMetadata } = data.site;

  const {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    author: siteAuthor,
    meta = [],
    keywords: siteKeywords,
    image: siteImage,
  } = siteMetadata;

  const title = props.title;
  const description = props.description || siteDescription;
  const image = props.image || siteImage;
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
    {
      name: 'image',
      content: image,
    },
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
    {
      name: 'og:image',
      content: image,
    },
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
    {
      name: 'twitter:image',
      content: image,
    },
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
