import homeIcon from "../assets/images/icons/home.svg";
import aboutIcon from "../assets/images/icons/book-open.svg";
import cryptoIcon from "../assets/images/icons/activity.svg";
import exchangeIcon from "../assets/images/icons/briefcase.svg";

const headerLinks = [
  {
    title: "Home",
    path: "/",
    iconSrc: homeIcon,
  },
  {
    title: "About",
    path: "/about",
    iconSrc: aboutIcon,
  },
  {
    title: "Cryptocurrencies",
    path: "/crypto",
    iconSrc: cryptoIcon,
  },
  {
    title: "Exchanges",
    path: "/exchange",
    iconSrc: exchangeIcon,
  },
];

export default headerLinks;
