import headerLinks from "../../../../utils/headerLinks";
import logo from "../../../../assets/images/icons/icon.svg";
import openIcon from "../../../../assets/images/icons/menu.svg";
import closeIcon from "../../../../assets/images/icons/close.svg";
import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NavList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    windowWidth < 1120 ? setIsMenuOpen(false) : setIsMenuOpen(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const menuVariants = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.79, 0.14, 0.15, 0.86],
      },
    },
    exit: {
      y: "-100%",
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
              />
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

const NotAnimatedNav = () => {
  return (
    <ul className="main__nav-list">
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
        />
      </li>
    </ul>
  );
};

export default NavList;
