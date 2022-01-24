import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <div className="navLogo">
        <Link to="/">
          <a>damkols.</a>
        </Link>
      </div>

      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">
          <a onClick={() => setIsOpen(!isOpen)}>Home</a>
        </Link>
        <Link to="/blog">
          <a onClick={() => setIsOpen(!isOpen)}>Blog</a>
        </Link>
        <Link to="/about">
          <a onClick={() => setIsOpen(!isOpen)}>About Me</a>
        </Link>
        <Link to="/contact">
          <a onClick={() => setIsOpen(!isOpen)}>Contact</a>
        </Link>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`btn-mobile ${isOpen && "open"}`}
      >
        <div className="btn-mobile-line"></div>
        <div className="btn-mobile-line sm-line"></div>
      </div>
    </div>
  );
};

export default Header;
