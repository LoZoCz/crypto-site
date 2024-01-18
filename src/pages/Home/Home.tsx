import AccordionSection from "./components/AccordionSection";
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import OfferSection from "./components/OfferSection";

function App() {
  return (
    <>
      <Header />
      <main className="main-grid">
        <HeroSection />
        <OfferSection />
        <AccordionSection />
      </main>
      <footer></footer>
    </>
  );
}

export default App;

//?jesli to mozliwe popracuj nad aniamcja navbara oraz observerem na scroll

//TODO zrob sekcje `join us` oraz footer
