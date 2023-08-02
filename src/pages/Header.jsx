import { Navigation, StarsCanvas } from "../components";

import "./styles/Header.scss";

const Header = () => {
  return (
    <header className="w-full f-col relative">
      <Navigation />
      <div className="header--container">
        <div className="header--container__title">
          <div className="object"></div>
          <div className="lane"></div>
          <h1 className="header--container__heading">
            Hi, I'm <span>Raitis</span>
          </h1>
          <h2 className="header--container__content">Web Developer</h2>
          <p className="header--container__text">
            I excel in creating fast, user-friendly interfaces <br /> and
            developing full-stack applications.
          </p>
        </div>
      </div>
      <div className="header__computer">
        <StarsCanvas />
      </div>
    </header>
  );
};

export default Header;
