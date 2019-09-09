/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
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

  const reviews = result.data.allReview.edges;

  // create individual film pages
  reviews.forEach(({ node }) => {
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

  // create paginated lists of reviews
  const reviewsPerPage = 6;
  const numPages = Math.ceil(reviews.length / reviewsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/films/${i + 1}`,
      component: path.resolve("./src/templates/film-list.js"),
      context: {
        limit: reviewsPerPage,
        skip: i * reviewsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // create md pages
  const blogPostTemplate = path.resolve(`src/templates/post.js`);
  const mdResult = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (mdResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  mdResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};
