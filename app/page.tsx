import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { HowItWorks } from './components/HowItWorks'
import { ContactForm } from './components/ContactForm'
import { Share } from './components/Share'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Cta />
        <Features />
        <ContactForm />
        <Share />
      </main>
      <Footer />
    </>
  )
}
