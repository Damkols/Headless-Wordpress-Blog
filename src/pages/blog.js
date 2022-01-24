import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../Layouts/Layout";
import AllPosts from "../components/AllPosts/AllPosts";

const blog = ({ data }) => {
  const showPosts = data.allWpPost.nodes.map((node) => (
    <div className="posts" key={node.slug}>
      <AllPosts
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

export default blog;

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
