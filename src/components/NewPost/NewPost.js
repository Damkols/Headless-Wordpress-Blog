import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../Layouts/Layout";
import Seo from "../Seo/Seo";
import innertext from "innertext";
import "./NewPost.scss";

const NewPost = ({ data }) => {
  const post = data.allWpPost.nodes[0];
  const image =
    data.allWpPost.nodes[0].featuredImage.node.localFile.childImageSharp;
  const siteMetadataImage =
    data.allWpPost.nodes[0].featuredImage.node.sourceUrl;
  const keyword = data.allWpPost.nodes[0].categories;
  const siteKeyword = keyword.nodes.map((res) => res.name).join(", ");

  return (
    <Layout>
      <Seo
        title={innertext(post.title)}
        description={innertext(post.excerpt)}
        image={siteMetadataImage}
        keywords={siteKeyword}
      />
      <div className="container">
        <div className="image">
          {image && <GatsbyImage image={getImage(image)} />}
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <p dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  );
};

export default NewPost;

export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        slug
        content
        excerpt
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(formats: WEBP, placeholder: BLURRED)
              }
            }
            sourceUrl
          }
        }
      }
    }
  }
`;
