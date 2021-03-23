/** @jsx jsx */
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '@/components/atoms/layout';
import SEO from '@/components/atoms/seo';
import React from 'react';
import { DetailPageCard } from '@/components/atoms/detail-page-card';
import { GatsbyImageFluid } from '@/templates/article-template';

type BioPageProps = {
    data: {
        mdx: {
            body: string;
            frontmatter: {
                name: string;
                title: string;
                image: GatsbyImageFluid;
                links: [{ name: string; url: string }];
            };
        };
    };
};

const BioPage: React.FC<BioPageProps> = ({ data }) => {
    const {
        mdx: {
            body,
            frontmatter: { name, title, image, links },
        },
    } = data;
    return (
        <>
            <SEO title={name} image={image.publicURL} />
            <Layout title={name}>
                <DetailPageCard
                    image={image.childImageSharp.fluid}
                    title={title}
                    body={body}
                    type={'bio'}
                    linksTitle={'Connect with me on: '}
                    links={links}
                />
            </Layout>
        </>
    );
};

export default BioPage;

export const pageQuery = graphql`
    fragment BioDataFragment on Mdx {
        body
        frontmatter {
            name
            title
            links {
                name
                url
            }
            image {
                publicURL
                childImageSharp {
                    fluid(maxWidth: 2400) {
                        srcSet
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            ...BioDataFragment
        }
    }
`;
