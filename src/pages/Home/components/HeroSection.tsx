import Button from "../../../components/Button";
import heroImg from "../../../assets/images/pictures/heroImage.svg";

const HeroSection = () => {
  return (
    <section className="hero__sect content-grid">
      <div className="hero__sect-typo">
        <h1 className="hero__sect-title">
          CipherPulse - Odkryj Świat Kryptowalut z Mocą Analizy i Porównań
        </h1>
        <p className="hero__sect-desc">
          Odkryj potężną falę informacji na CipherPulse! Znajdziesz tu kompletną
          listę kryptowalut, giełd i narzędzi do porównywania. Wprowadź się w
          świat krypto z pełnym pulsującym zasobem wiedzy!
        </p>
        <div className="hero__sect-btn-wrapper">
          <Button
            title="About us"
            addClasses={["hero__sect-btn", "primary-btn", "h4"]}
          />
          <Button
            title="Explore"
            addClasses={["hero__sect-btn", "secondary-btn", "h4"]}
          />
        </div>
      </div>
      <img src={heroImg} alt="hero image" className="hero__sect-img" />
    </section>
  );
};

export default HeroSection;
