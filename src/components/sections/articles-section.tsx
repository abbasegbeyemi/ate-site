import { graphql, useStaticQuery } from 'gatsby';

// const ArticlesSection = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMdx(
//         sort: { order: DESC, fields: frontmatter___date }
//         filter: { fileAbsolutePath: { regex: "/articles/" } }
//       ) {
//         edges {
//           node {
//             id
//             timeToRead
//             excerpt
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               date(formatString: "DD/MM/YYYY")
//               image {
//                 publicURL
//                 childImageSharp {
//                   fluid(maxWidth: 1920) {
//                     base64
//                     tracedSVG
//                     srcWebp
//                     srcSetWebp
//                     originalImg
//                     originalName
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   return (
//     <section sx>
//
//     </section>
//   )
// };
