/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(node.internal.type);
  if (node.internal.type === `Review`) {
    const { createNodeField } = actions;
    const slug = `/film/${node.id}`;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allReview {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allReview.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/film.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
