import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { FluidObject } from 'gatsby-image';
import { ActionCard } from '@/components/action-card';

export type ImageProps = Array<{
  node: { name: string; childImageSharp: { fluid: FluidObject } };
}>;

const useAboutSectionImages: () => ImageProps = () => {
  const {
    allFile: { images },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/info/" } }) {
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
  return images;
};
// Require is not quite react, but tsx. Considering that we have already declared
// the module in our declarations.d.ts file, we could just as easily have used the
// normal import syntax to import the YAMl. I'll leave require here because
// I think it is cool.
const aboutData = require('@/data/info-section-data.yaml');

const AboutSection: React.FC = () => {
  const { content } = aboutData;
  const images = useAboutSectionImages();

  return (
    <section>
      {content.map((c, index) => {
        const { name, title, text } = c.section;

        const image = images.find((im) => im.node.name === name);
        const {
          node: {
            childImageSharp: { fluid },
          },
        } = image;
        return (
          <ActionCard
            image={fluid}
            title={title}
            text={text}
            key={`${name}-${index}`}
            idx={index}
          />
        );
      })}
    </section>
  );
};

export { AboutSection };
