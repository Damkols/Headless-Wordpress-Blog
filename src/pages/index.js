import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "gatsby";
import "../styles/index.scss";
import resume from "../assets/bxs-file-blank.svg";
import github from "../assets/bxl-github.svg";
import linkedin from "../assets/bxl-linkedin.svg";
import twitter from "../assets/bxl-twitter.svg";

const IndexPage = () => {
  const socialLinks = [
    {
      title: "Twitter",
      image: twitter,
      link: "https://twitter.com/kolsCodes",
      id: 1,
    },
    {
      title: "Linkedin",
      image: linkedin,
      link: "https://www.linkedin.com/in/kolapo-damola-usman-810996133/",
      id: 2,
    },
    {
      title: "Github",
      image: github,
      link: "https://github.com/Damkols",
      id: 3,
    },
    {
      title: "Resume",
      image: resume,
      link: "https://docs.google.com/document/d/1RSEx5hRJ9pqsqC9ZQ3rCfJxdo09vKlVA2GNg1DwB9ks/edit",
      id: 4,
    },
  ];

  return (
    <Layout>
      <div className="home">
        <h1>
          I am Kolapo Damola Usman, <br /> a Front-end Developer.
        </h1>
        <div className="links">
          {socialLinks.map((social) => (
            <a
              className="social"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.id}
            >
              <img src={social.image} alt="Social Icons" />
              <p>{social.title}</p>
            </a>
          ))}
        </div>
        <div className="goto_blog">
          <Link to="/blog">Go-to Blog</Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
