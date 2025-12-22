import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { HowItWorks } from './components/HowItWorks'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
