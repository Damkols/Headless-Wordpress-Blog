import React from "react";
import Layout from "../Layouts/Layout";

const About = () => {
  return (
    <Layout>
      {/*<SEO
        title="About "
        keywords={[
          `damkols`,
          `About damkols`,
          `damkols-blog`,
          `dev-damkols`,
          `Kolapo Damola`,
        ]}
    />*/}
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0&appId=293222885149153&autoLogAppEvents=1"
        nonce="1i2rsuAX"
      ></script>
      <h1>About Me</h1>
      <h2>Who am i ?</h2>
      <p>
        I'm <b>Damola</b> , a frontend developer.
        <br />
        My stacks of development are ReactJS, Gatsby, GraphQL, HTML, CSS, SCSS,
        JavaScript, I love React and SCSS for frontend development
      </p>

      <h2>My Loved Works</h2>
      <p>
        I love algorithms and data structure due to my passion for mathematics.
        I do take challenges in some sites, so I prefer{" "}
        <a
          href="https://codility.app"
          target="_blank"
          rel="noreferrer"
          style={{ cursor: "pointer" }}
        >
          Codility
        </a>{" "}
        over{" "}
        <a
          href="https://hackerrank.com"
          target="_blank"
          rel="noreferrer"
          style={{ cursor: "pointer" }}
        >
          Hackerrank
        </a>{" "}
        because{" "}
        <a
          href="https://codility.app"
          target="_blank"
          rel="noreferrer"
          style={{ cursor: "pointer" }}
        >
          Codility
        </a>{" "}
        challenges with time and gives solution result in percentage due to the
        time complexity and test passed by the code.
      </p>

      <h2>Target</h2>
      <p>
        I'm working to be a great developer in future, still code everyday..
      </p>

      <h2>Word For Programmers</h2>
      <p>
        Coding all night doesn't make you better than other, but focusing and
        practicing does . Try to follow a scheme of practice and challenge
      </p>
      <div
        class="fb-comments"
        data-href="http://qudusayoblog.netlify.app/"
        data-numposts="5"
        data-width=""
      ></div>
    </Layout>
  );
};

export default About;
