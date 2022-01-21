const path = require(`path`);
//import NewPost from './src/components/NewPost/NewPost'

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    query MyQuery {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          title
          slug
          excerpt
          content
        }
      }
    }
  `).then((result) => {
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve("./src/components/NewPost/NewPost.js"),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
