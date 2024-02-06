import headerLinks from "../../pages/Home/utils/headerLinks";
import logo from "../../assets/images/icons/icon.svg";
import openIcon from "../../assets/images/icons/menu.svg";
import closeIcon from "../../assets/images/icons/close.svg";
import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NotAnimatedNav from "./NotAnimatedNav";
import { MediaContext } from "../../context/MediaContext";

const NavList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { windowWidth } = useContext(MediaContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (windowWidth < 1120) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }, [windowWidth]);

  const menuVariants = {
    initial: {
      x: windowWidth * -1,
    },
    animate: {
      x: 1,
      transition: {
        duration: 0.5,
        ease: [0.79, 0.14, 0.15, 0.86],
      },
    },
    exit: {
      x: windowWidth * -1,
      transition: {
        duration: 0.5,
        ease: [0.79, 0.14, 0.15, 0.86],
      },
    },
  };

  if (windowWidth > 1120) {
    return <NotAnimatedNav />;
  }

  return (
    <>
      <button className="hamburger-btn btn" onClick={() => toggleMenu()}>
        <img src={openIcon} alt="menu icon" />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            key={1}
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="main__nav-list"
          >
            <div className="main__nav-head">
              <img src={logo} alt="main logo" className="nav__logo" />
              <button
                className="hamburger-btn btn"
                onClick={() => toggleMenu()}
              >
                <img src={closeIcon} alt="menu icon" />
              </button>
            </div>
            {headerLinks.map((link) => (
              <li className="main__nav-item" key={link.title}>
                <Link to={link.path} className="nav__item-link">
                  {link.title}
                </Link>
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
                addClasses={["main__nav-btn", "register-btn", "primary-btn"]}
                clickFunc={() => navigate("/register")}
              />
              <Button
                title="Login"
                addClasses={["main__nav-btn", "register-btn", "primary-btn"]}
                clickFunc={() => navigate("/login")}
              />
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavList;
