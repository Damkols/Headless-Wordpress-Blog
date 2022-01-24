import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Seo from "../components/Seo/Seo";
import "./Layouts.scss";

const Layout = (props) => {
  return (
    <div className="layout__container">
      <Seo />
      <Header />
      <div className="children_container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
