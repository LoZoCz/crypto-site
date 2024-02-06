import { useContext } from "react";
import MainLayout from "../../layouts/MainLayout";
import Footer from "../Home/components/Footer";
import DesktopTimeline from "./components/DesktopTimeline";
import { MediaContext } from "../../context/MediaContext";
import MobileTimeline from "./components/MobileTimeline";

const About = () => {
  const { windowWidth } = useContext(MediaContext);

  return (
    <MainLayout>
      <main className="about__main main-grid">
        <h1 className="about__main-title content-grid">
          O nas - czyli kulisy projektu o krypto
        </h1>
        {windowWidth < 720 ? <MobileTimeline /> : <DesktopTimeline />}
      </main>
      <Footer />
    </MainLayout>
  );
};

export default About;
