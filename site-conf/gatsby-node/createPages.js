const path = require('path');

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMdx {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/default.tsx'),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};

module.exports = {
  createPages,
};
