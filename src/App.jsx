import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import TechnologiesSection from './components/TechnologiesSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import './assets/css/components/app.sass'

export default function App() {
  return (
    <div id="portfolio">
      <Header />
      <Hero />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
