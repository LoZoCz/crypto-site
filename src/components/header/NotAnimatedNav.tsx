import headerLinks from "../../pages/Home/utils/headerLinks";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";

const NotAnimatedNav = () => {
  const navigate = useNavigate();

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
          clickFunc={() => navigate("/register")}
        />
        <Button
          title="Login"
          addClasses={["main__nav-btn", "register-btn", "primary-btn"]}
          clickFunc={() => navigate("/login")}
        />
      </li>
    </ul>
  );
};

export default NotAnimatedNav;
