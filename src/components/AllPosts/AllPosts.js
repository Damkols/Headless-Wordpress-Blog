import React from "react";
import "./AllPosts.scss";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Post = ({ image, title, excerpt, slug }) => {
  return (
    <div className="posts">
      <div className="card">
        <GatsbyImage image={getImage(image)} alt="title" />
        <div className="cardContent">
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Link to={slug}>
            <h2>{title}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
