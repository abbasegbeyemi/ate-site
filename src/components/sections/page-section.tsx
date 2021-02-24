/** @jsx jsx */
import * as React from 'react';
import { jsx, Heading } from 'theme-ui';
import { DetailPageCard, DetailPageCardProps } from '@/components/atoms/detail-page-card';
import { ImageProps } from '@/components/sections/about-section';

type InfoType = Omit<DetailPageCardProps, 'image' | 'linksTitle' | 'imageAmination'>;

interface IPageSection {
  content: [{ section: InfoType & { name: string } }];
  images: ImageProps;
  sectionTitle?: string;
  cardType: string;
  linksTitle?: string;
  imageAnimation?: string;
}

const PageSection: React.FC<IPageSection> = ({
  content,
  images,
  sectionTitle,
  linksTitle,
  cardType,
  imageAnimation,
}) => {
  return (
    <section sx={{ display: 'flex', flexDirection: 'column' }}>
      {sectionTitle && (
        <Heading as={'h1'} variant={'sectionTitle'}>
          {sectionTitle}
        </Heading>
      )}
      {content.map((c, idx) => {
        const { name, title, text, links, date } = c.section;
        const image = images.find((im) => im.node.name === name);
        const {
          node: {
            childImageSharp: { fluid },
          },
        } = image;
        return (
          <DetailPageCard
            type={cardType}
            key={`${name}-${idx}`}
            title={title}
            text={text}
            image={fluid}
            links={links}
            date={date}
            linksTitle={linksTitle}
            imageAnimation={imageAnimation}
          />
        );
      })}
    </section>
  );
};

export { PageSection };
