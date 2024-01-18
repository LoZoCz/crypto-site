import coinIcon from "../../../assets/images/icons/coins.svg";
import compareIcon from "../../../assets/images/icons/compare.svg";
import exchangeIcon from "../../../assets/images/icons/exchange.svg";

const OfferSection = () => {
  return (
    <section className="offer__sect content-grid">
      <h2 className="offer__sect-title h2">
        Co możesz robić na naszej stronie?
      </h2>
      <div className="offer__sect-cards">
        <div className="offer__sect-card">
          <img src={coinIcon} alt="card icon" className="offer__sect-icon" />
          <h3 className="offer__sect-card-title h3">
            Sprawdzaj nowe kryptowaluty
          </h3>
          <p className="offer__sect-card-text p">
            Otrzymuj bieżące informacje o nowych kryptowalutach, śledź trendy i
            analizy, aby być zawsze na bieżąco z rynkiem kryptowalut.
          </p>
        </div>
        <div className="offer__sect-card">
          <img
            src={exchangeIcon}
            alt="card icon"
            className="offer__sect-icon"
          />
          <h3 className="offer__sect-card-title h3">Odkrywaj nowe giełdy</h3>
          <p className="offer__sect-card-text p">
            Znajduj nowe platformy handlowe i giełdy kryptowalut, poznawaj ich
            funkcje i oferty, aby wybrać najlepsze miejsce do dokonywania
            transakcji.
          </p>
        </div>
        <div className="offer__sect-card">
          <img src={compareIcon} alt="card icon" className="offer__sect-icon" />
          <h3 className="offer__sect-card-title h3">Porównaj kryptowaluty</h3>
          <p className="offer__sect-card-text p">
            Wykorzystaj nasze narzędzia porównawcze do analizy różnych
            kryptowalut, sprawdzając ich parametry, historię cen, i inne istotne
            informacje.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
