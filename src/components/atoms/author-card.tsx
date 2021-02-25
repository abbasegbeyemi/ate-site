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
        display: 'flex',
        // boxShadow: (theme) => theme.shadows.lg,
        mx: 'auto',
        maxWidth: ['100%', null, '70%', null],
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'textMuted',
        }}
      >
        <Link to={url} sx={{ variant: 'links.pageLink', m: 0 }}>
          {name}
        </Link>
        <p
          sx={{
            m: 0,
            p: 0,
            variant: 'text.listLight',
          }}
        >
          {date} || {`${timeToRead} minute read`}
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
