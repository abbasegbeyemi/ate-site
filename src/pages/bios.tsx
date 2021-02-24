import SEO from '@/components/atoms/seo';
import Layout from '@/components/atoms/layout';
import React from 'react';
import { graphql } from 'gatsby';
import ListPageCard from '@/components/atoms/list-page-card';
import { BioProps } from '@/templates/bio-template';

type PageProps = {
  data: {
    allMdx: {
      edges: {
        node: BioProps & { fields: { slug: string } };
      }[];
    };
  };
};

const Bios: React.FC<PageProps> = ({ data }) => {
  const pageTitle = 'The Team';
  const pageDescription = 'The African Tech Enthusiasts Team.';
  const {
    allMdx: { edges },
  } = data;

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} />
      <Layout title={pageTitle}>
        {edges.map(({ node }, idx) => (
          <ListPageCard
            key={`${pageTitle}-${idx}`}
            image={node.frontmatter.image.childImageSharp.fluid}
            slug={node.fields.slug}
            title={node.frontmatter.name}
            subtitle={node.frontmatter.title}
            type={'bio'}
          />
        ))}
      </Layout>
    </>
  );
};

export default Bios;

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { order: ASC, fields: [frontmatter___username] }
      filter: { fields: { collection: { eq: "bios" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...BioDataFragment
        }
      }
    }
  }
`;
