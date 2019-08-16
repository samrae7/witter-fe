const fetch = require("node-fetch");
const queryString = require("query-string");
exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions;
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;
  // plugin code goes here...
  // Join apiOptions with the Pixabay API URL
  const apiUrl = `http://localhost:3000/reviews`;
  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the JSON data into a node
      .then(data => {
        // For each query result (or 'hit')
        data.forEach(review => {
          console.log("Review data is:", review);
          const nodeData = processReview(
            review,
            createNodeId,
            createContentDigest
          );
          createNode(nodeData);
        });
      })
  );
};

const processReview = (review, createNodeId, createContentDigest) => {
  const nodeId = createNodeId(`review-${review.id}`);
  const nodeContent = JSON.stringify(review);

  const nodeData = Object.assign({}, review, {
    id: nodeId,
    parent: null,
    children: [],
    internal: {
      type: `Review`,
      content: nodeContent,
      contentDigest: createContentDigest(review),
    },
  });

  return nodeData;
};
