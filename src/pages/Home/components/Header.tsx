import logo from "../../../assets/images/icons/icon.svg";
import headerLinks from "../../../utils/headerLinks";
import menuIcon from "../../../assets/images/icons/menu.svg";
import { useState } from "react";
import Button from "../../../components/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main__head">
      <img src={logo} alt="main logo" className="main__head-logo" />
      <nav className="main__head-nav main__nav">
        <button
          className="hamburger-btn btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={menuIcon} alt="menu icon" />
        </button>
        <ul className={`main__nav-list ${isMenuOpen ? "open" : "close"}`}>
          {headerLinks.map((link) => (
            <li className="main__nav-item" key={link.title}>
              <a href={link.path} className="nav__item-link">
                {link.title}
              </a>
              <img
                src={link.iconSrc}
                alt={`${link.title} icon`}
                className="nav__item-icon"
              />
            </li>
          ))}
          <li className="main__nav-item">
            <Button
              title="Register"
              addClasses={["main__nav-btn", "register-btn"]}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
