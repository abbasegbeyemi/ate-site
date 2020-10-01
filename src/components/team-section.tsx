import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PageSection } from '@/components/page-section';

const TeamSection: React.FC = () => {
  const {
    allFile: { images },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/team/" } }) {
        images: edges {
          node {
            name
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const teamData = require('@/data/bio-section-data.yaml');
  const { content } = teamData;

  return (
    <PageSection
      content={content}
      images={images}
      title={'The Team'}
      type={'bio'}
    />
  );
};

export { TeamSection };
