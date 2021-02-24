/** @jsx jsx */
import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { jsx, Heading } from 'theme-ui';
import ListPageCard from '@/components/atoms/list-page-card';

const ArticlesSection: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { collection: { eq: "articles" } } }
        limit: 3
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
  `);
  console.log(edges);
  return (
    <section>
      <Heading as={'h1'} variant={'sectionTitle'}>
        Recent Articles
      </Heading>
      {edges.map(({ node }, idx) => (
        <ListPageCard
          key={`${node.fields.articleSlug}-${idx}`}
          image={node.frontmatter.articleImage.childImageSharp.fluid}
          slug={node.fields.articleSlug}
          title={node.frontmatter.title}
          type={'articles'}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
          timeToRead={node.timeToRead}
        />
      ))}
      <div sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link
          sx={{
            variant: 'links.pageLink',
            mr: 3,
            mb: 4,
          }}
          to={'/articles'}
        >
          More articles {'\u1405'}
        </Link>
      </div>
    </section>
  );
};

export default ArticlesSection;
