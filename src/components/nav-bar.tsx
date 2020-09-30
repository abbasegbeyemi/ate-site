/** @jsx jsx */
import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { jsx, Grid } from 'theme-ui';
import Logo from '@/components/logo';

const NavBar: React.FC = (props) => {
  const {
    site: {
      siteMetadata: { navBarLinks },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navBarLinks {
            name
            url
          }
        }
      }
    }
  `);
  return (
    <Grid {...props} variant={'navGrid'}>
      <Logo sx={{ gridColumn: '1 / span 2', variant: 'logos.nav' }} />
      <div
        css={{
          gridColumn: '3 / span 6',
          textAlign: 'right',
        }}
      >
        {navBarLinks.map(({ name, url }, idx) => (
          <Link key={idx} to={url} sx={{ variant: 'links.navLink' }}>
            {name}
          </Link>
        ))}
      </div>
    </Grid>
  );
};
export { NavBar };
