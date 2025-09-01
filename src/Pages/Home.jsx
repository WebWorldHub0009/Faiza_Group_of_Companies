import React from 'react'
import Hero from '../Components/Hero'
import AboutSection from '../Components/AboutSection'
import PremiumHero from '../Components/PremiumHero'
import WhyChooseUs from '../Components/WhyChooseUs'
import WebsiteStats from '../Components/WebsiteStats'
import FAQ from '../Components/FAQ'
import WhatWeOffer from '../Components/WhatWeOffer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <PremiumHero/>
      <WhyChooseUs/>
      <WebsiteStats/>
      <FAQ/>
      <WhatWeOffer/>
    </div>
  )
}

export default Home
