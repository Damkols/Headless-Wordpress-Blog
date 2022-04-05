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
            I'm <b>Damola</b>, a frontend developer.
          </p>

          <p></p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
