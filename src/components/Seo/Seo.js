import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

const Seo = ({ title, description, keywords, image }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultKeywords,
          defaultImage,
          defaultDescription,
          url,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image ? image : url + defaultImage}`,
        keywords: keywords || defaultKeywords,
      };
      return (
        <Helmet>
          <title>{seo.title}</title>
          <meta name="image" content={seo.image} />
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta name="robots" content="index,follow"></meta>
        </Helmet>
      );
    }}
  />
);

export default Seo;

const query = graphql`
  query siteQuery {
    site {
      siteMetadata {
        defaultTitle: title
        defaultKeywords: keywords
        defaultImage: image
        defaultDescription: description
        url: url
      }
    }
  }
`;
