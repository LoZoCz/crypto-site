import { Link } from "react-router-dom";
import logo from "../../../assets/images/icons/icon.svg";
import { socials, siteLinks } from "../utils/footerLinks";
import Button from "../../../components/Button";

const Footer = () => {
  return (
    <section className="main__foot glassyBg">
      <div className="main__foot-content">
        <div className="main__foot-logo">
          <img
            src={logo}
            alt="main logo image"
            className="main__foot-logoImg"
          />
          <h2 className="main__foot-title h1">CipherPulse</h2>
        </div>
        <ul className="main__foot-list social__list">
          {socials.map((social, index) => (
            <li key={index} className="social__list-item glassyBg">
              <a className="social__list-link" href={social.link}>
                <img src={social.icon} alt={`${social.name} icon`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="main__foot-links">
        <ul className="main__foot-list links__list">
          {siteLinks.map((link, index) => (
            <li key={index} className="links__list-item">
              <Link className="links__list-link" to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <form className="main__foot-form newsletter__form" action="">
          <label className="newsletter__form-label h4" htmlFor="newsletter-inp">
            Newsletter
          </label>
          <div className="newsletter__form-uses">
            <input
              type="email"
              id="newsletter-inp"
              className="newsletter__form-inp"
              placeholder="Wprowadź swój mail"
            />
            <Button
              title="Zasubskrybuj"
              addClasses={["newsletter__form-btn", "secondary-btn", "p"]}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Footer;
