import AccordionSection from './components/AccordionSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import JoinUsSection from './components/JoinUsSection'
import OfferSection from './components/OfferSection'
import MainLayout from '../../layouts/MainLayout'

function Home() {
    return (
        <MainLayout>
            <main className="main-grid">
                <HeroSection />
                <OfferSection />
                <AccordionSection />
                <JoinUsSection />
            </main>
            <Footer />
        </MainLayout>
    )
}

export default Home
