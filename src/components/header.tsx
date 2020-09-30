/** @jsx jsx */
import { BottomWave } from '@/components/waves';
import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { jsx, Grid, Heading } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { NavBar } from './nav-bar';

interface IHeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<IHeaderProps> = ({ title, subtitle }) => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { regex: "/bg-header/" }) {
        childImageSharp {
          fluid(maxWidth: 2600) {
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
  `);
  const {
    bg: {
      childImageSharp: { fluid },
    },
  } = data;
  return (
    <header sx={{ variant: 'layout.header' }}>
      <NavBar
        css={{
          gridRow: '1',
          gridColumn: '1 / span 8',
        }}
      />
      <Grid id={'container'}>
        <div
          css={{
            gridColumn: '1 / span 8',
            gridRow: '2',
          }}
        >
          <Heading as={'h1'} variant={'headerTitle'}>
            {title}
          </Heading>
          {subtitle && (
            <Heading as={'h5'} variant={'headerSubtitle'}>
              {subtitle}
            </Heading>
          )}
        </div>
      </Grid>
      <BottomWave className={'wavySvg'} />
    </header>
  );
};

export default Header;
