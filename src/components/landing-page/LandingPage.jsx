import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import About from './sections/About'
import Footer from './sections/Footer'

function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <About />
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage
