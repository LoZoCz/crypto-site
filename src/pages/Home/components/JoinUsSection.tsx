import { useNavigate } from "react-router-dom";
import joinusImg from "../../../assets/images/pictures/joinusImg.svg";
import Button from "../../../components/Button";

const JoinUsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="joinUs__sect content-grid">
      <div className="joinUs__sect-body glassyBg">
        <img src={joinusImg} alt="join us image" className="joinUs__sect-img" />
        <div className="joinUs__sect-content">
          <h1 className="joinUs__sect-title h2">Dołącz do nas dziś</h1>
          <p className="joinUs__sect-text p">
            Odkryj fascynujący świat kryptowalut razem z nami! Dołącz do naszej
            społeczności już dziś, aby uzyskać dostęp do najnowszych informacji,
            ekskluzywnych treści edukacyjnych oraz możliwości inwestycyjnych.
            Wspólnie budujmy przyszłość finansów cyfrowych!
          </p>
          <Button
            title="Dołącz Teraz"
            addClasses={["joinUs__sect-btn", "primary-btn", "h3"]}
            clickFunc={() => navigate("/register")}
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
