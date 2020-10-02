/** @jsx jsx */
import * as React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Grid, Heading, jsx, Link } from 'theme-ui';

export type InfoCardProps = {
  title: string;
  text: string;
  image: FluidObject;
  type: string;
  date?: string;
  links?: [{ link: { name: string; url: string } }];
  linksTitle?: string;
  imageAnimation?: string;
};
const InfoCard: React.FC<InfoCardProps> = ({
  title,
  text,
  image,
  type,
  date,
  links,
  linksTitle,
  imageAnimation,
}) => {
  return (
    <Grid variant={'bioGrid'}>
      <div
        data-aos={imageAnimation || 'fade-right'}
        sx={{
          variant: `layout.${type}.image`,
        }}
      >
        <Img alt={title} fluid={image} imgStyle={{ objectFit: 'cover' }} />
      </div>
      <div
        data-aos={'fade-left'}
        sx={{
          variant: `layout.${type}.text`,
        }}
      >
        <Heading as={'h3'} variant={'bioTitle'}>
          {title}
        </Heading>
        <p sx={{ variant: `text.${type}Text` }}>{text}</p>
        {date && (
          <p sx={{ variant: `text.${type}Text`, color: 'accent' }}>
            Date: {date}
          </p>
        )}
        {links && (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              fontSize: [0, null, null, 2],
            }}
          >
            {linksTitle || 'Connect: '}
            {links.map((l, idx) => {
              const { name, url } = l.link;
              return (
                <Link
                  key={`${name}-${idx}`}
                  variant={'pageLink'}
                  href={url}
                  target={'blank'}
                  rel={'noreferrer noopener'}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Grid>
  );
};

export { InfoCard };
