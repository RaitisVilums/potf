import { Navigation, StarsCanvas, TypeWriter } from "../components";

import { useNavigate } from "react-router-dom";

import "./styles/Header.scss";

// ! figure out the navigation to about page

const Header = () => {
  const navigateToAbout = () => {};

  return (
    <header className="w-full f-col relative">
      <Navigation />
      <div className="header--container">
        <div className="header--container__title">
          <h1 className="header--container__heading">
            Hi, I'm <span>Raitis</span>
          </h1>
          <h2 className="header--container__content">
            <TypeWriter text="Web developer" delay={100} />
          </h2>
          <p className="header--container__text">
            I excel in creating fast, user-friendly interfaces <br /> and
            developing full-stack applications.
          </p>
        </div>
        <button className="header__btn" onClick={navigateToAbout}></button>
      </div>
      <div className="header__computer">
        <StarsCanvas />
      </div>
    </header>
  );
};

export default Header;
