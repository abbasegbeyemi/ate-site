/** @jsx jsx */
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '@/components/atoms/layout';
import SEO from '@/components/atoms/seo';
import React from 'react';
import { FluidObject } from 'gatsby-image';
import { DetailPageCard } from '@/components/atoms/detail-page-card';

type BioProps = {
  data: {
    mdx: {
      body;
      frontmatter: {
        name: string;
        title: string;
        image: { childImageSharp: { fluid: FluidObject } };
        links: [{ name: string; url: string }];
      };
    };
  };
};

const BioPage: React.FC<BioProps> = ({ data }) => {
  const {
    mdx: {
      body,
      frontmatter: { name, title, image, links },
    },
  } = data;
  return (
    <>
      <SEO title={name} />
      <Layout title={name}>
        <DetailPageCard
          image={image.childImageSharp.fluid}
          title={title}
          body={body}
          type={'bio'}
          linksTitle={'Connect with me on: '}
          links={links}
        />
      </Layout>
    </>
  );
};
export default BioPage;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        name
        title
        links {
          name
          url
        }
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
  }
`;
