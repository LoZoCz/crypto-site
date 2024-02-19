import logo from "../../../assets/images/icons/icon.svg";
import { socials, siteLinks } from "../utils/footerLinks";
import Button from "../../../components/Button";
import UserLink from "../../../components/UserLink";
import { useForm, SubmitHandler } from "react-hook-form";
import Loader from "../../../components/Loader";

type NewsletterFieldsTypes = {
  email: string;
};

const Footer = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFieldsTypes>();

  const onSubmit: SubmitHandler<NewsletterFieldsTypes> = async (data) => {
    try {
      await new Promise((r) => setTimeout(r, 10000));
      console.log(data);
    } catch (error) {
      setError("root", { message: "Coś poszło nie tak" });
    }
  };

  return (
    <footer className="main__foot glassyBg">
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
              <UserLink
                content={link.title}
                addClasses={["links__list-link"]}
                path={link.path}
              />
            </li>
          ))}
        </ul>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="main__foot-form newsletter__form"
        >
          <label className="newsletter__form-label h4" htmlFor="newsletter-inp">
            Newsletter
          </label>
          <div className="newsletter__form-uses">
            <input
              type="email"
              className="newsletter__form-inp userInput"
              placeholder="Wprowadź swój mail"
              autoComplete="email"
              id="newsletter-inp"
              {...register("email", {
                required: "E-mail wymagane",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Podany e-mail jest nieprawidłowy",
                },
              })}
            />
            <Button
              title={isSubmitting ? <Loader size="small" /> : "Zasubskrybuj"}
              type="submit"
              disabled={isSubmitting}
              addClasses={["newsletter__form-btn", "secondary-btn", "p"]}
            />
            {errors.email && (
              <p className="newsletter__form-error">{errors.email.message}</p>
            )}
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
