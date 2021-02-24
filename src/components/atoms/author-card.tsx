/** @jsx jsx */
import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Grid, jsx } from 'theme-ui';
import { Link } from 'gatsby';

type AuthorCardProps = {
  name: string;
  url: string;
  date: string;
  image: { childImageSharp: { fluid: FluidObject } };
  timeToRead: string;
};
const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  timeToRead,
  date,
  url,
  image,
}) => {
  return (
    <div
      sx={{
        my: 3,
        p: 2,
        display: 'flex',
        // boxShadow: (theme) => theme.shadows.lg,
        mx: 'auto',
        maxWidth: ['100%', null, '70%', null],
      }}
    >
      <div
        sx={{
          p: 0,
          overflow: 'hidden',
          width: [12, null, 24, null],
        }}
      >
        <Img fluid={image.childImageSharp.fluid} />
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
          ml: 2,
          color: 'textMuted',
        }}
      >
        <Link to={url} sx={{ variant: 'links.pageLink', m: 0 }}>
          {name}
        </Link>
        <p
          sx={{
            m: 0,
          }}
        >
          {date} || {`${timeToRead} minute read`}
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
