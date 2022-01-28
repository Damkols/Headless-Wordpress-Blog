import React from "react";
import Layout from "../Layouts/Layout";
import "../styles/about.scss";

const About = () => {
  return (
    <Layout>
      <div className="about">
        <h1>About Me</h1>
        <div className="me">
          <h2>Who am i ?</h2>
          <p>
            I'm <b>Damola</b> , a frontend developer.
            <br />
            My stacks of development are ReactJS, Gatsby, GraphQL, HTML, CSS,
            SCSS, JavaScript, I love React and SCSS for frontend development
          </p>
        </div>

        <div className="lovedWorks">
          <h2>My Loved Works</h2>
          <p>
            I love algorithms and data structure due to my passion for
            mathematics. I do take challenges in some sites, so I prefer
            challenges with time and gives solution result in percentage due to
            the time complexity and test passed by the code.
          </p>
        </div>

        <div className="targets">
          <h2>Target</h2>
          <p>
            I'm working to be a great developer in future, still code everyday..
          </p>
        </div>

        <div className="partingWords">
          <h2>Word For Programmers</h2>
          <p>
            Coding all night doesn't make you better than other, but focusing
            and practicing does . Try to follow a scheme of practice and
            challenge
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
