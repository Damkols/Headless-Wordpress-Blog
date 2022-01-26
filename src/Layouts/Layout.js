import React from "react";
import Header from "../components/Header/Header";
import Seo from "../components/Seo/Seo";
import "./Layouts.scss";

const Layout = (props) => {
  return (
    <div className="layout__container">
      <Seo />
      <Header />
      <div className="children_container">{props.children}</div>
    </div>
  );
};

export default Layout;
