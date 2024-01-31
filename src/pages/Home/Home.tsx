import AccordionSection from "./components/AccordionSection";
import Footer from "./components/Footer";
import Header from "../../components/header/Header";
import HeroSection from "./components/HeroSection";
import JoinUsSection from "./components/JoinUsSection";
import OfferSection from "./components/OfferSection";
import useAxios from "../../hooks/useAxios";

function App() {
  const { response } = useAxios("/ping");

  console.log(response);

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
