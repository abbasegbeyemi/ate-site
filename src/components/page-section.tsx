import * as React from 'react';
import { Heading } from 'theme-ui';
import { InfoCard, InfoCardProps } from '@/components/info-card';
import { ImageProps } from '@/components/about-section';

type InfoType = Omit<InfoCardProps, 'image' | 'linksTitle' | 'imageAmination'>;

interface IPageSection {
  content: [{ section: InfoType & { name: string } }];
  images: ImageProps;
  title?: string;
  type: string;
  linksTitle?: string;
  imageAnimation?: string;
}

const PageSection: React.FC<IPageSection> = ({
  content,
  images,
  title,
  linksTitle,
  type,
  imageAnimation,
}) => {
  return (
    <section sx={{ display: 'flex', flexDirection: 'column' }}>
      {title && (
        <Heading as={'h1'} variant={'sectionTitle'}>
          {title}
        </Heading>
      )}
      {content.map((c, idx) => {
        console.log(c);
        const { name, title, text, links, date } = c.section;
        const image = images.find((im) => im.node.name === name);
        const {
          node: {
            childImageSharp: { fluid },
          },
        } = image;
        return (
          <InfoCard
            type={type}
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
