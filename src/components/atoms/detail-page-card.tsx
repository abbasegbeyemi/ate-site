/** @jsx jsx */
import * as React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Grid, Heading, jsx, Link } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaGlobeAfrica } from '@react-icons/all-files/fa/FaGlobeAfrica';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import { MdFolderSpecial } from '@react-icons/all-files/md/MdFolderSpecial';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';

export const socialIcons = {
    linkedin: <FaLinkedinIn />,
    website: <FaGlobeAfrica />,
    twitter: <FaTwitter />,
    youtube: <FaYoutube />,
    files: <MdFolderSpecial />,
    email: <HiOutlineMail />,
};

export type DetailPageCardProps = {
    title?: string;
    body: string;
    image: FluidObject;
    type: string;
    date?: string;
    links?: [{ name: string; url: string }];
    linksTitle?: string;
    imageAnimation?: string;
};
const DetailPageCard: React.FC<DetailPageCardProps> = ({
    title,
    body,
    image,
    type,
    date,
    links,
    linksTitle = 'Connect: ',
    imageAnimation = 'fade-right',
}) => {
    const components = {
        p: ({ children, ...props }) => (
            <p
                {...props}
                sx={{
                    variant: `text.${type}Text`,
                }}
            >
                {children}
            </p>
        ),
        a: ({ children, ...props }) => (
            <a
                {...props}
                sx={{ variant: 'pageLink' }}
                target="_blank"
                rel="noreferrer noopener"
            >
                {children}
            </a>
        ),
    };

    return (
        <Grid variant={'bioGrid'}>
            <div
                data-aos={imageAnimation}
                sx={{
                    variant: `layout.${type}.image`,
                }}
            >
                <Img
                    alt={title}
                    fluid={image}
                    imgStyle={{ objectFit: 'cover' }}
                />
            </div>
            <div
                data-aos={'fade-left'}
                sx={{
                    variant: `layout.${type}.text`,
                }}
            >
                {title && (
                    <Heading as={'h3'} variant={'bioTitle'}>
                        {title}
                    </Heading>
                )}
                <MDXProvider components={components}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
                {date && (
                    <p sx={{ variant: `text.${type}Text`, color: 'accent' }}>
                        Date: {date}
                    </p>
                )}
                {links && (
                    <div
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            fontSize: [0, null, null, 2],
                            alignItems: 'baseline',
                        }}
                    >
                        {linksTitle}
                        {links.map(({ name, url }, idx) => {
                            return (
                                <Link
                                    key={`${name}-${idx}`}
                                    variant={'iconLink'}
                                    href={url}
                                    target={'blank'}
                                    rel={'noreferrer noopener'}
                                >
                                    {socialIcons[name]}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </Grid>
    );
};

export { DetailPageCard };
