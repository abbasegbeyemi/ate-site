/** @jsx jsx */
import * as React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { jsx, Grid, Heading, Link } from 'theme-ui';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

type TeamCardProps = {
  fullname: string;
  bio: string;
  image: FluidObject;
  linkedin?: string;
  website?: string;
};
const TeamCard: React.FC<TeamCardProps> = ({
  fullname,
  bio,
  image,
  linkedin,
  website,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Grid variant={'bioGrid'}>
      <div
        data-aos={'fade-right'}
        sx={{
          gridColumn: ['1 / span 2', null, '1 / span 3', null],
          borderRadius: (theme) => theme.radii.lg,
          overflow: 'hidden',
          boxShadow: (theme) => theme.shadows['2xl'],
        }}
      >
        <Img fluid={image} imgStyle={{ objectFit: 'cover' }} />
      </div>
      <div
        data-aos={'fade-left'}
        sx={{
          gridColumn: ['3 / span 6', null, '4 /span 5', null],
          px: [2, null, 5, null],
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Heading as={'h3'} variant={'bioTitle'}>
          {fullname}
        </Heading>
        <p sx={{ variant: 'text.bioText' }}>{bio}</p>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            fontSize: [0, null, null, 2],
          }}
        >
          Connect:
          {linkedin && (
            <Link
              variant={'pageLink'}
              href={linkedin}
              target={'_blank'}
              rel={'noreferrer noopener'}
            >
              LinkedIn
            </Link>
          )}
          {website && (
            <Link
              variant={'pageLink'}
              href={website}
              target={'_blank'}
              rel={'noreferrer noopener'}
            >
              Website
            </Link>
          )}
        </div>
      </div>
    </Grid>
  );
};

export { TeamCard };
