/** @jsx jsx */
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { jsx, Grid, Heading } from 'theme-ui';
import { Link } from 'gatsby';

type ListPageCardProps = {
  title: string;
  subtitle?: string;
  excerpt?: string;
  date?: string;
  timeToRead?: string;
  image: FluidObject;
  imageAnimation?: string;
  type: string;
  slug: string;
  links?: { name: string; url: string }[];
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
        <Heading as={'h3'} variant={`text.${props.type}Title`}>
          <Link to={props.slug}>{props.title}</Link>
        </Heading>

        {props.subtitle && (
          <Heading variant={`text.${props.type}Subtitle`}>
            {props.subtitle}
          </Heading>
        )}
        <p
          sx={{
            p: 0,
            m: 0,
            variant: 'text.listLight',
          }}
        >
          {props.date && props.date}{' '}
          {props.timeToRead && `||${props.timeToRead} minute read`}
        </p>
        {props.excerpt && (
          <p sx={{ variant: `text.${props.type}Text` }}>
            {props.excerpt} {<Link to={props.slug}>read more</Link>}
          </p>
        )}
      </div>
    </Grid>
  );
};

export default ListPageCard;
