// import { toTheme } from '@theme-ui/typography';
// import stardust from 'typography-theme-stardust';
// import merge from 'lodash.merge';
import { tailwind } from '@theme-ui/presets';

const theme = {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    headerTitle: '#ffffff',
    headerSubtitle: '#e7ddaa',
    actionTitle: '#007d9f',
    actionText: '#0e2529',
    actionTitleAlt: '#4acdf1',
    actionTextAlt: '#acdcef',
    text: '#0f2022',
    link: '#c3ecf6',
    pagelink: '#1d545a',
    background: '#fff',
    footerColor: '#007d9f',
  },
  breakpoints: ['576px', '768px', '992px', '1200px'],
  fontSizes: [
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2rem',
    '2.25rem',
    '3rem',
    '4rem',
    '4.5rem',
    '5rem',
    '6rem',
    '7rem',
    '8rem',
  ],
  fonts: {
    body: 'Merriweather Sans, system-ui,-apple-system, sans-serif',
    heading: 'Josefin Sans, sans-serif',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    headerTitle: {
      variant: 'text.heading',
      color: 'headerTitle',
      textAlign: 'center',
      fontSize: [3, null, 9, null],
    },
    headerSubtitle: {
      variant: 'text.heading',
      color: 'headerSubtitle',
      textAlign: 'center',
      fontSize: ['inherit', null, 4, null],
    },
    actionTitle: {
      variant: 'text.heading',
      fontSize: [3, 4, null, 5],
      color: ['actionTitleAlt', null, 'actionTitle', null],
    },
    actionText: {
      variant: 'text.body',
      fontSize: [1, null, null, 2],
      color: ['actionTextAlt', null, 'actionText', null],
    },
  },
  links: {
    footerLink: {
      textDecoration: 'none',
      color: 'link',
      mx: 1,
      transition: 'color 0.25s',

      ':hover': {
        color: 'pagelink',
      },
    },
    navLink: {
      variant: 'links.footerLink',
      mx: [1, 2, null, 3],
      fontSize: ['inherit', null, 2, null],
    },
    pageLink: {
      variant: 'links.footerLink',
      color: 'pagelink',

      ':hover': {
        color: 'footerColor',
      },
    },
  },
  logos: {
    nav: {
      width: [16, null, 24, null],

      '#Connectors, #Border': {
        path: {
          fill: (theme) => `${theme.colors.link} !important`,
          stroke: 'link',
          strokeWidth: '5px',
          transition: 'fill 0.25s, stroke 0.25s',
        },
      },

      ':hover': {
        '#Connectors, #Border': {
          path: {
            fill: (theme) => `${theme.colors.pagelink} !important`,
            stroke: 'pagelink',
          },
        },
      },
    },
  },
  grids: {
    singleRow: {
      gridTemplateColumns: 'repeat(8, 1fr)',
      maxWidth: '90rem',
      width: '100%',
      mx: 'auto',
      gridRowGap: 3,
      px: [4, null, 5, null],
    },
    navGrid: {
      variant: 'grids.singleRow',
      mb: [2, null, 3, null],
      mt: [4, null, 5, null],
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerGrid: {
      variant: 'grids.singleRow',
      my: 2,
    },
    actionGrid: {
      variant: 'grids.singleRow',
      display: ['none', null, null, 'grid'],
      my: 6,
      px: [null, null, null, 5],
      alignItems: 'center',
    },
    actionGridSmall: {
      variant: 'grids.singleRow',
      px: [1, 4, null, null],
      display: ['grid', null, null, 'none'],
      my: 4,
    },
    footerGrid: {
      variant: 'grids.navGrid',
    },
  },
  layout: {
    header: {
      width: '100%',
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      bg: 'footerColor',
      '.wavySvg': {
        width: '100%',
        flexShrink: 0,
        // flex: '0 0 auto',
        // position: 'relative',
        display: 'flex',

        svg: {
          flex: '1 0 auto',
          path: {
            fill: 'background',
          },
        },
      },
      '#container': {
        variant: 'grids.headerGrid',
        color: 'titleText',
        flex: '1 0 auto',
      },
    },
    footer: {
      width: '100%',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      '.wavySvg': {
        width: '100%',
        // flex: '1 0',
        display: 'flex',
        svg: {
          flex: '1 0 auto',
          path: {
            fill: 'footerColor',
          },
        },
      },
      '#container': {
        fontSize: [0, null, 3, null],
        color: 'text',
        flex: '1 0 auto',
        textAlign: 'center',
        py: 1,
        bg: 'footerColor',
      },
    },
  },
};

export default theme;
