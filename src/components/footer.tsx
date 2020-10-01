/** @jsx jsx */
import { Grid, jsx, Link } from 'theme-ui';
import React from 'react';
import { BottomWave } from './waves';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from './logo';

const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: { social },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            name
            url
          }
        }
      }
    }
  `);
  return (
    <footer
      sx={{
        variant: 'layout.footer',
      }}
    >
      {/*<BottomWave className={'wavySvg'} />*/}
      <div id={'container'}>
        <Grid variant={'footerGrid'}>
          <Logo
            sx={{ variant: 'logos.nav', gridRow: 1, gridColumn: '1 / span 2' }}
          />
          <p
            sx={{
              gridRow: 1,
              gridColumn: '3 / span 6',
              justifySelf: 'right',
              textAlign: 'right',
              display: 'flex',
              flexDirection: ['column', null, 'row', null],
            }}
          >
            Connect with ATE:
            {social.map(({ name, url }, idx) => (
              <Link
                key={`${name}-${idx}`}
                target={'_blank'}
                rel={'noreferrer noopener'}
                href={url}
                variant={'footerLink'}
              >
                {name}
              </Link>
            ))}
          </p>
          <div
            sx={{
              fontSize: 0,
              mt: 2,
              gridRow: 2,
              gridColumn: '1 / span 8',
            }}
          >
            Built with ☕ by{' '}
            <Link
              target={'_blank'}
              rel={'noreferrer noopener'}
              href={'https://abbasegbeyemi.me'}
              variant={'footerLink'}
            >
              Abbas
            </Link>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
