import Header from "../components/Header"
import Hero from "../components/Hero"
import Services from "../components/Services"
import CarBrands from "../components/CarBrands"
import About from "../components/About"
import FAQ from "../components/FAQ"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <CarBrands />
        <About />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
