import SEO from '@/components/atoms/seo';
import Layout from '@/components/atoms/layout';
import React from 'react';
import { EventsSection } from '@/components/sections/events-section';
import { graphql } from 'gatsby';
import { EventProps } from '@/templates/event-template';
import ListPageCard from '@/components/atoms/list-page-card';

type PageProps = {
  data: {
    allMdx: {
      edges: {
        node: EventProps & { fields: { slug: string } };
      }[];
    };
  };
};

const Events: React.FC<PageProps> = ({ data }) => {
  const pageTitle = 'Events';
  const pageDescription = 'The African Tech Enthusiasts Events and Webinars.';
  const {
    allMdx: { edges },
  } = data;

  return (
    <React.Fragment>
      <SEO title={pageTitle} description={pageDescription} />
      <Layout title={pageTitle}>
        {edges.map(({ node }, idx) => (
          <ListPageCard
            key={`${pageTitle}-${idx}`}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            image={node.frontmatter.image.childImageSharp.fluid}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            type={'events'}
          />
        ))}
      </Layout>
    </React.Fragment>
  );
};
export default Events;

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { collection: { eq: "events" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...EventDataFragment
        }
      }
    }
  }
`;
