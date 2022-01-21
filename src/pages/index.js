import { graphql } from "gatsby";
import * as React from "react";
import Post from "../components/Post/Post";
import Layout from "../Layouts/Layout";

const IndexPage = ({ data }) => {
  const showPosts = data.allWpPost.nodes.map((node, index) => (
    <div className="posts" key={index}>
      <Post
        title={node.title}
        excerpt={node.excerpt}
        slug={node.slug}
        image={
          node.featuredImage.node.localFile.childImageSharp.gatsbyImageData
        }
      />
    </div>
  ));
  return <Layout>{showPosts}</Layout>;
};

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allWpPost(sort: { fields: date, order: DESC }) {
      nodes {
        title
        slug
        date(formatString: "MM/DD/YYYY")
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(formats: WEBP, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
