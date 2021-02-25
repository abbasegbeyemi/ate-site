const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// For gatsby node
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Add a slug field for each mdx file
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content/`,
      trailingSlash: false,
    });
    const parent = getNode(node.parent).sourceInstanceName;
    createNodeField({
      node,
      name: `slug`,
      value: `/${parent}${slug}`,
    });
    createNodeField({
      node,
      name: 'collection',
      value: parent,
    });
  }
};

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    const {
      data: {
        allMdx: { edges },
      },
    } = result;
    edges.forEach(({ node }) => {
      const {
        fields: { slug },
        frontmatter: { template },
      } = node;

      let temp = template === null ? 'default' : template;

      createPage({
        path: slug,
        component: path.resolve(`./src/templates/${temp}-template.tsx`),
        context: {
          slug: slug,
        },
      });
    });
  });
};
