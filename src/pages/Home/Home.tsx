import AccordionSection from "./components/AccordionSection";
import Footer from "./components/Footer";
import Header from "../../components/header/Header";
import HeroSection from "./components/HeroSection";
import JoinUsSection from "./components/JoinUsSection";
import OfferSection from "./components/OfferSection";

function App() {
  return (
    <>
      <Header />
      <main className="main-grid">
        <HeroSection />
        <OfferSection />
        <AccordionSection />
        <JoinUsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;

//?jesli to mozliwe popracuj nad aniamcja navbara oraz observerem na scroll

//TODO interackcje na stronie z przyciskami i linkami

//TODO strona logowania i rejestracji

//TODO dodac opcje logowania na stronie
//TODO dodac opcje rejestracji na stronie

//TODO funkcje do danych z api

//TODO strona `o nas` z komentarzami

//TODO strona z krypto i giełdami
