import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import LocationSection from './components/LocationSection/LocationSection'
import TourPackages from './components/TourPackages/TourPackages'
import OurBlogSection from './components/OurBlogSection/OurBlogSection'
import TestimonialSection from './components/TestimonialSection/TestimonialSection'
import FooterSection from './components/FooterSection/FooterSection'
import NavbarSection from './components/NavbarSection/NavbarSection'

function App() {
  return (
    <>
    <NavbarSection/>
    <HeroSection/>
    <LocationSection/>
    <TourPackages/>
    <TestimonialSection/>
    <OurBlogSection/>
    <FooterSection/>
    </>
    
  )
}

export default App