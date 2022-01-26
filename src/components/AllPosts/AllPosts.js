import React from "react";
import "./AllPosts.scss";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Post = ({ image, title, excerpt, slug }) => {
  return (
    <div className="posts">
      <div className="card">
        <GatsbyImage image={getImage(image)} alt="title" className="Image" />
        <div className="cardContent">
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Link to={slug}>
            <button>Readmore..</button>
          </Link>
        </div>
      </div>
      <div className="line_container">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Post;
