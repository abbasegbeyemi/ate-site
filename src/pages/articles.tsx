import SEO from '@/components/atoms/seo';
import Layout from '@/components/atoms/layout';
import React from 'react';
import { graphql } from 'gatsby';
import { ArticleProps } from '@/templates/article-template';
import ListPageCard from '@/components/atoms/list-page-card';

type PageProps = {
  data: {
    allMdx: {
      edges: {
        node: ArticleProps & { fields: { articleSlug: string } };
      }[];
    };
  };
};

const Articles: React.FC<PageProps> = ({ data }) => {
  const pageTitle = 'Articles';
  const pageDescription = 'Tech articles by members of ATE.';
  const {
    allMdx: { edges },
  } = data;

  return (
    <React.Fragment>
      <SEO title={pageTitle} description={pageDescription} />
      <Layout title={pageTitle}>
        {edges.map(({node}, idx) => (
          <ListPageCard
            key={`${pageTitle}-${idx}`}
            timeToRead={node.timeToRead}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            image={node.frontmatter.articleImage.childImageSharp.fluid}
            slug={node.fields.articleSlug}
            title={node.frontmatter.title}
            type={'articles'}
          />
        ))}
      </Layout>
    </React.Fragment>
  );
};

export default Articles;

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { collection: { eq: "articles" } } }
    ) {
      edges {
        node {
          fields {
            articleSlug: slug
          }
          ...ArticleDataFragment
        }
      }
    }
  }
`;
