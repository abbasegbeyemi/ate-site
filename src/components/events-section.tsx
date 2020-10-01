import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PageSection } from '@/components/page-section';

const EventsSection: React.FC = () => {
  const {
    allFile: { images },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/events/" } }) {
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
  const eventsData = require('@/data/events-section-data.yaml');
  const { content } = eventsData;

  return (
    <PageSection
      content={content}
      images={images}
      title={'Events'}
      linksTitle={'Links:'}
      imageAnimation={'flip-left'}
      type={'events'}
    />
  );
};

export { EventsSection };
