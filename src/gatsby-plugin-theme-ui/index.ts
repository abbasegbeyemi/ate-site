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
        accent: '#deb60e',
        actionTitle: '#007d9f',
        actionText: '#0e2529',
        actionTitleAlt: '#4acdf1',
        actionTextAlt: '#acdcef',
        text: '#0f2022',
        link: '#1de2ff',
        pageLink: '#961c30',
        background: '#fff',
        footerColor: '#325258',
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

            a: {
                color: 'inherit',
                ':hover': {
                    color: 'pageLink',
                },
            },
        },
        subHeading: {
            fontFamily: 'heading',
            lineHeight: 'normal',
            fontWeight: 'medium',
        },
        body: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        light: {
            variant: 'text.body',
            fontWeight: 'light',
            color: 'textMuted',
        },
        listLight: {
            variant: 'text.light',
            fontSize: [0, null, null, 1],
        },
        headerTitle: {
            variant: 'text.heading',
            color: 'headerTitle',
            textAlign: 'center',
            fontSize: [3, null, 7, null],
        },
        headerSubtitle: {
            variant: 'text.heading',
            color: 'headerSubtitle',
            textAlign: 'center',
            fontSize: ['inherit', null, 4, null],
        },
        sectionTitle: {
            variant: 'text.heading',
            color: 'actionTitle',
            textAlign: 'center',
            fontSize: [3, null, 9, null],
            my: [3, null, 4, null],
        },
        actionTitle: {
            variant: 'text.heading',
            fontSize: [3, 4, null, 5],
            color: ['actionTitleAlt', null, null, 'actionTitle'],
        },
        actionText: {
            variant: 'text.body',
            fontSize: [1, null, null, 2],
            color: ['actionTextAlt', null, null, 'actionText'],
        },
        bioTitle: {
            variant: 'text.heading',
            fontSize: [2, null, 3, 6],
            color: 'actionTitle',
        },
        bioSubtitle: {
            variant: 'text.subHeading',
            fontSize: [1, null, 2, 5],
            color: 'accent',
        },
        bioText: {
            variant: 'text.body',
            my: [1, null, 2, null],
            fontSize: [0, null, 1, 3],
            a: {
                variant: 'links.pageLink',
            },
        },
        eventsTitle: {
            variant: 'text.bioTitle',
        },
        eventsText: {
            variant: 'text.bioText',
            color: 'text',
        },
        articlesTitle: {
            variant: 'text.bioTitle',
        },
        articlesText: {
            variant: 'text.bioText',
        },
    },
    links: {
        footerLink: {
            textDecoration: 'none',
            color: 'link',
            mx: 1,
            transition: 'color 0.25s',
            ':hover': {
                color: 'accent',
            },
        },
        nav: {
            variant: 'links.footerLink',
            mx: [1, 2, null, 3],
            fontSize: [0, null, 3, null],
        },
        pageLink: {
            variant: 'links.footerLink',
            color: 'pageLink',
            ':hover': {
                color: 'accent',
            },
        },
        iconLink: {
            variant: 'links.footerLink',
            color: 'pageLink',
            fontSize: [4, null, 7, null],
            svg: {
                verticalAlign: 'middle',
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
                        fill: (theme) => `${theme.colors.accent} !important`,
                        stroke: 'accent',
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
            mt: [2, null, 2, null],
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerGrid: {
            variant: 'grids.singleRow',
            mt: 2,
            mb: [2, null, 3, null],
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
        bioGrid: {
            variant: 'grids.singleRow',
            alignItems: 'center',
            px: [1, 4, null, 5],
            my: [2, null, 5, null],
        },
    },
    layout: {
        bio: {
            image: {
                // gridColumn: ['1 / span 2', null, '1 / span 3', null],
                gridColumn: ['1 / span 2'],
                borderRadius: (theme) => theme.radii.lg,
                overflow: 'hidden',
                boxShadow: (theme) => theme.shadows['2xl'],
            },
            text: {
                gridColumn: ['3 / span 6'],
                px: [2, null, 5, null],
                display: 'flex',
                flexDirection: 'column',
            },
        },
        events: {
            image: {
                gridRow: 1,
                gridColumn: ['1 / span 8', null, null, '1 / span 3'],
                borderRadius: (theme) => theme.radii.lg,
                overflow: 'hidden',
                boxShadow: (theme) => theme.shadows['2xl'],
            },
            text: {
                gridRow: [2, null, null, 1],
                gridColumn: ['1 / span 8', null, null, '4 /span 5'],
                px: [2, null, 5, null],
                display: 'flex',
                flexDirection: 'column',
            },
        },
        articles: {
            image: {
                variant: 'layout.events.image',
            },
            text: {
                variant: 'layout.events.text',
            },
        },
        header: {
            width: '100%',
            display: 'flex',
            // flex: '1 0 auto',
            flexDirection: 'column',
            bg: 'footerColor',
            '.wavySvg': {
                width: '100%',
                height: '30%',
                display: 'flex',

                svg: {
                    height: '100%',
                    // width: '100%',
                    path: {
                        fill: 'background',
                    },
                },
            },
            '#container': {
                variant: 'grids.headerGrid',
                color: 'titleText',
            },
        },
        footer: {
            width: '100%',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            '.wavySvg': {
                width: '100%',
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
                flexShrink: 0,
                textAlign: 'center',
                py: 1,
                bg: 'footerColor',
            },
        },
    },
    styles: {
        ...tailwind.styles,
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            fontSize: [0, 1, 2, 3],

            '& ::selection': {
                background: (theme) => theme.colors.footerColor,
            },
            '& .gatsby-resp-image-wrapper': {
                '&  img': {
                    p: 3,
                },
            },
            '& div[role=navigation]': {
                display: ['block', 'none', null, null],
            },

            '& :focus': {
                outline: 'none',
            },
            '& a': {
                textDecoration: 'none',
            },
            transition: 'background 0.6s',
        },
        a: {
            color: 'pageLink',
            textDecoration: 'none',
            transition: 'color 0.25s linear',
            ':hover, :focus': {
                color: 'accent',
            },
        },
        p: {
            fontFamily: 'body',
            fontWeight: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            fontSize: [0, 1, 2, null],
        },

        img: {
            width: ['100%', 'lg', '2xl', '3xl'],
            p: 0,
            mt: 4,
            display: 'block',
            mx: 'auto',
        },
    },
};

export default theme;
