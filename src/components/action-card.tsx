/** @jsx jsx */
import * as React from 'react';
import { jsx, Grid, Heading } from 'theme-ui';
import Img, { FluidObject } from 'gatsby-image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import BackgroundImage from 'gatsby-background-image';

type ActionCardProps = {
  image: FluidObject;
  title: string;
  text: string;
  idx: number;
};
const ActionCard: React.FC<ActionCardProps> = ({ text, title, image, idx }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <React.Fragment>
      <Grid variant={'actionGrid'}>
        <div
          data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
          sx={{
            gridRow: 1,
            gridColumn: idx % 2 === 0 ? '1 / span 4' : '5 / span 4',
            width: '100%',
            height: '100%',
            borderRadius: (theme) => theme.radii.lg,
            overflow: 'hidden',
            boxShadow: (theme) => theme.shadows['2xl'],
          }}
        >
          <Img
            sx={{
              width: '100%',
              height: '100%',
            }}
            fluid={image}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
        <div
          data-aos={'fade-in'}
          sx={{
            gridRow: 1,
            gridColumn: idx % 2 === 0 ? '5 / span 4' : '1 / span 4',
            px: 5,
          }}
        >
          <Heading as={'h2'} variant={'actionTitle'}>
            {title}
          </Heading>
          <p sx={{ variant: 'text.actionText' }}>{text}</p>
        </div>
      </Grid>
      <Grid variant={'actionGridSmall'}>
        <BackgroundImage
          sx={{
            p: 4,
            gridColumn: '1 / span 8',
            '&::before, &::after': {
              filter: 'brightness(35%)',
            },
            width: '100%',
            borderRadius: (theme) => theme.radii.lg,
            overflow: 'hidden',
            boxShadow: (theme) => theme.shadows['2xl'],
          }}
          Tag={'div'}
          fluid={image}
        >
          <div data-aos={'fade-in'}>
            <Heading as={'h2'} variant={'actionTitle'}>
              {title}
            </Heading>
            <p sx={{ variant: 'text.actionText' }}>{text}</p>
          </div>
        </BackgroundImage>
      </Grid>
    </React.Fragment>
  );
};

export { ActionCard };
