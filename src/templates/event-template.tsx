import { graphql } from 'gatsby';
import Layout from '@/components/atoms/layout';
import SEO from '@/components/atoms/seo';
import React from 'react';
import { DetailPageCard } from '@/components/atoms/detail-page-card';
import { GatsbyImageFluid } from '@/templates/article-template';

export type EventProps = {
  body: string;
  excerpt: string;
  frontmatter: {
    title: string;
    image: GatsbyImageFluid;
    links: [{ name: string; url: string }];
    date: string;
  };
};
type PageProps = {
  data: { mdx: EventProps };
};

const EventPage: React.FC<PageProps> = ({ data }) => {
  const {
    mdx: {
      body,
      frontmatter: { title, image, links, date },
    },
  } = data;
  return (
    <>
      <SEO title={title} />
      <Layout title={title}>
        <DetailPageCard
          title={date}
          image={image.childImageSharp.fluid}
          body={body}
          type={'events'}
          linksTitle={'Links: '}
          links={links}
          imageAnimation={'flip-left'}
        />
      </Layout>
    </>
  );
};
export default EventPage;

export const pageQuery = graphql`
  fragment EventDataFragment on Mdx {
    body
    excerpt
    frontmatter {
      title
      links {
        name
        url
      }
      date(formatString: "dddd Do MMMM, YYYY")
      image {
        publicURL
        childImageSharp {
          fluid(maxWidth: 2400) {
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }

  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      ...EventDataFragment
    }
  }
`;
