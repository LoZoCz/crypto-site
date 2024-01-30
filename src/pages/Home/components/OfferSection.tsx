import GlassyBox from "../../../components/GlassyBox";
import cardsContent from "../utils/cardsContent";

const OfferSection = () => {
  return (
    <section className="offer__sect content-grid">
      <h2 className="offer__sect-title h2">
        Co możesz robić na naszej stronie?
      </h2>
      <div className="offer__sect-cards">
        {cardsContent.map((card, index) => (
          <GlassyBox key={index} addClasses={["offer__sect-card"]}>
            <img
              src={card.image}
              alt="card icon"
              className="offer__sect-icon"
            />
            <h3 className="offer__sect-card-title h3">{card.title}</h3>
            <p className="offer__sect-card-text p">{card.content}</p>
          </GlassyBox>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
