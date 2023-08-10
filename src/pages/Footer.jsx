import { logo } from "../assets";
import "./styles/Footer.scss";
import { ContactsItem } from "../components";
import { ContactIcons } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo">
          <img src={logo} alt="logo" width={80} height={45} />
        </div>
        <div className="footer__navigation">
          <a href="#/">Home</a>
          <a href="#/">About</a>
          <a href="#/">Projects</a>
          <a href="#/">Contacts</a>
        </div>
        <div className="footer__contacts">
          <h4> &#169; 2023 Raitis Vilums</h4>
          <div>
            {ContactIcons.map((item, index) => (
              <ContactsItem key={index} contact={item} />
            ))}
          </div>
          <a>Curriculum Vitae</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
