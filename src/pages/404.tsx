/** @jsx jsx */
import { Link, PageProps } from 'gatsby';
import SEO from '@/components/atoms/seo';
import Layout from '@/components/atoms/layout';
import { sample } from 'lodash';
import { jsx, Grid } from 'theme-ui';
import * as React from 'react';

const NotFound: React.FC<PageProps> = () => {
  const names = ['Ade', 'Temi', 'Yemi', 'Toyo', 'Allen', 'Ruki', 'Seyi'];
  const culprit = sample(names);
  return (
    <React.Fragment>
      <SEO title={'404'} description={'404 Error page'} />
      <Layout title={'404: Not Found'}>
        <Grid variant={'singleRow'}>
          <p
            sx={{
              gridColumn: '1 / span 8',
              textAlign: 'center',
              fontSize: ['inherit', null, 3, null],
            }}
          >
            {`There isn't quite a page here yet. ${culprit} messed up. Head back to `}
            <Link sx={{ variant: 'links.pageLink' }} to={'/'}>
              Civilization.
            </Link>
          </p>
        </Grid>
      </Layout>
    </React.Fragment>
  );
};

export default NotFound;
