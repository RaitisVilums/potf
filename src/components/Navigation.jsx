import { NavLink, Link } from "react-router-dom";
import { Navlinks } from "../constants";

import { logo } from "../assets";

import "./styles/Navigation.scss";

// ! Create a Mobile navigation
// ! Create a useViewport hook to detect the screen size

const Navigation = () => {
  const formatLinkId = (id) => {
    return String(id).padStart(2, "0");
  };

  return (
    <nav className="navigation">
      <Link to={"/"}>
        <img
          className="navigation__image"
          src={logo}
          alt="logo"
          width="100px"
        />
      </Link>
      <ul className="navigation__items">
        {Navlinks.map((link) => (
          <NavLink className="navigation__item" key={link.id} to={link.path}>
            {link.title}&nbsp;
            <span className="navigation__item--identifier">
              {formatLinkId(link.id)}
            </span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
