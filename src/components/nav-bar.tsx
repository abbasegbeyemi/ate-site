/** @jsx jsx */
import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { jsx, Grid } from 'theme-ui';
import Logo from '@/components/logo';

const NavBar: React.FC = (props) => {
  return (
    <nav>
      <Grid {...props} variant={'navGrid'}>
        <Logo sx={{ gridColumn: '1 / span 2', variant: 'logos.nav' }} />
      </Grid>
    </nav>
  );
};
export { NavBar };
