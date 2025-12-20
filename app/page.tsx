'use client'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export default function PetyaLanding() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}