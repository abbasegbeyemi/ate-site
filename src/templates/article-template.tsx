/** @jsx jsx */
import {graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {jsx} from 'theme-ui';
import Layout from '@/components/atoms/layout';
import SEO from '@/components/atoms/seo';
import React from 'react';
import Img, {FluidObject} from 'gatsby-image';
import AuthorCard from '@/components/atoms/author-card';

export type GatsbyImageFluid = {
    childImageSharp: { fluid: FluidObject };
};
type ArticlePageProps = {
    data: {
        mdx: {
            body: string;
            timeToRead: string;
            excerpt: string;
            frontmatter: {
                title: string;
                articleImage: GatsbyImageFluid;
                date: string;
                author: {
                    fields: {
                        authorSlug: string;
                    };
                    frontmatter: {
                        name: string;
                        authorImage: GatsbyImageFluid;
                    };
                };
            };
        };
    };
};

export const Article: React.FC<{ title: string; image: GatsbyImageFluid }> = (props) => {
    return (
        <article
            sx={{
                "& > p, h1, h2, h3, h4, h5, h6, ul": {
                    maxWidth: ["100%", null, "70%", null],
                    mx: "auto",
                },
                "h1, h2, h3, h4, h5, h6": {
                    color: "accent",
                },
            }}
        >
            
            <div
                sx={{
                    maxHeight: ["30rem"],
                    maxWidth: ["100%", null, "70%", null],
                    mx: "auto",
                    overflow: "hidden",
                }}
            >
                <Img
                    title={props.title}
                    alt={props.title}
                    fluid={props.image.childImageSharp.fluid}
                    imgStyle={{objectFit: "cover"}}
                />
            </div>
            {props.children}
        </article>
    )
    
}

const ArticlePage: React.FC<ArticlePageProps> = ({data}) => {
    const {
        mdx: {
            body,
            timeToRead,
            frontmatter: {
                title,
                articleImage,
                date,
                author: {
                    frontmatter: {name, authorImage},
                    fields: {authorSlug},
                },
            },
        },
    } = data;
    return (
        <>
            <SEO title={title}/>
            <Layout title={title}>
                <div sx={{
                    maxWidth: "90rem",
                    px: 4,
                    mx: "auto",
                }}>
                    <AuthorCard
                        name={name}
                        date={date}
                        image={authorImage}
                        url={authorSlug}
                        timeToRead={timeToRead}
                    />
                    <Article title={title} image={articleImage}>
                        <MDXProvider>
                            <MDXRenderer>{body}</MDXRenderer>
                        </MDXProvider>
                    </Article>
                
                </div>
            
            </Layout>
        </>
    );
};

export default ArticlePage;

export const pageQuery = graphql`
    fragment ArticleDataFragment on Mdx {
        body
        timeToRead
        excerpt(pruneLength: 200)
        frontmatter {
            title
            date(formatString: "MMMM, YYYY")
            articleImage: image {
                childImageSharp {
                    fluid(maxWidth: 2400) {
                        srcSet
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            author {
                fields {
                    authorSlug: slug
                }
                frontmatter {
                    name
                    authorImage: image {
                        childImageSharp {
                            fluid(maxWidth: 500) {
                                srcSet
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            ...ArticleDataFragment
        }
    }
`;
