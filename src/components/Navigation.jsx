import { NavLink, Link } from "react-router-dom";
import { Navlinks } from "../constants";
import { useState, useEffect } from "react";

import { logo } from "../assets";

import "./styles/Navigation.scss";

// ! Create a Mobile navigation
// ! Create a useViewport hook to detect the screen size

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const formatLinkId = (id) => {
    return String(id).padStart(2, "0");
  };

  const handleScroll = () => {
    const screenHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset;
    setIsScrolled(scrollPosition > screenHeight * 0.95);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${isScrolled ? "navigation-fixed" : "navigation"} `}>
      {!isScrolled && (
        <a href={"/"} className="link">
          <img
            className="navigation__image"
            src={logo}
            alt="logo"
            width="100px"
          />
        </a>
      )}
      <ul className="navigation__items">
        {Navlinks.map((link) => (
          <a className="navigation__item" key={link.id} href={link.path}>
            {link.title}&nbsp;
            <span className="navigation__item--identifier">
              {formatLinkId(link.id)}
            </span>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
