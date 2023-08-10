import { logoBlack } from "../assets";
import "./styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo">
          <img src={logoBlack} alt="assets" width={130} height={70} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
