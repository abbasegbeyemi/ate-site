/** @jsx jsx */
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { jsx, Grid, Heading } from 'theme-ui';
import { Link } from 'gatsby';

type ListPageCardProps = {
  title: string;
  excerpt?: string;
  date: string;
  timeToRead?: string;
  image: FluidObject;
  imageAnimation?: string;
  type: string;
  slug: string;
};

const ListPageCard: React.FC<ListPageCardProps> = (props) => {
  return (
    <Grid variant={'bioGrid'}>
      <div
        data-aos={props.imageAnimation ?? 'fade-right'}
        sx={{
          variant: `layout.${props.type}.image`,
        }}
      >
        <Img
          alt={props.title}
          fluid={props.image}
          imgStyle={{ objectFit: 'cover' }}
        />
      </div>
      <div
        sx={{
          variant: `layout.${props.type}.text`,
        }}
      >
        <Link to={props.slug}>
          <Heading as={'h3'} variant={`text.${props.type}Title`}>
            {props.title}
          </Heading>
        </Link>
        <p
          sx={{
            color: 'textMuted',
            p: 0,
            m: 0,
          }}
        >
          {props.date} {props.timeToRead && `||${props.timeToRead} minute read`}
        </p>
        <p sx={{ variant: `text.${props.type}Text` }}>
          {props.excerpt} {<Link to={props.slug}>read more</Link>}
        </p>
      </div>
    </Grid>
  );
};

export default ListPageCard;
