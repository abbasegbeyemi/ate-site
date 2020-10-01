/** @jsx jsx */
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TeamCard } from '@/components/team-card';
import { jsx, Heading } from 'theme-ui';

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
    <section sx={{ display: 'flex', flexDirection: 'column' }}>
      <Heading as={'h1'} variant={'sectionTitle'}>
        The Team
      </Heading>
      {content.map((c, idx) => {
        const { name, fullname, bio, linkedin, website } = c.section;
        const image = images.find((im) => im.node.name === name);
        const {
          node: {
            childImageSharp: { fluid },
          },
        } = image;
        return (
          <TeamCard
            key={`${name}-${idx}`}
            fullname={fullname}
            bio={bio}
            image={fluid}
            linkedin={linkedin}
            website={website}
          />
        );
      })}
    </section>
  );
};

export { TeamSection };
