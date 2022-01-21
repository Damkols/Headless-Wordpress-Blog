import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Seo from "../components/Seo/Seo";

const Layout = (props) => {
  return (
    <div>
      <Seo />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
