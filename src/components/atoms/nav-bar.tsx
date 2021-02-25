/** @jsx jsx */
import * as React from 'react';
import { jsx, Grid, NavLink } from 'theme-ui';
import Logo from '@/components/atoms/logo';
import { graphql, useStaticQuery } from 'gatsby';

const NavBar: React.FC = (props) => {
  const {
    site: {
      siteMetadata: { navbarLinks: links },
    },
  } = useStaticQuery(graphql`
    query NavLinksQuery {
      site {
        siteMetadata {
          navbarLinks {
            name
            url
          }
        }
      }
    }
  `);
  return (
    <nav>
      <Grid {...props} variant={'navGrid'}>
        <Logo sx={{ gridColumn: '1 / span 2', variant: 'logos.nav' }} />
        <div
          sx={{
            gridColumn: '3 / span 6',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          {links.map((e, i) => (
            <NavLink key={`${e.url}-${i}`} href={e.url}>
              {e.name}
            </NavLink>
          ))}
        </div>
      </Grid>
    </nav>
  );
};
export { NavBar };
