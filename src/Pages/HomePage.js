import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Faq from '../components/Faq'
import Feature from '../components/Feature'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import Works from '../components/Works'

export default function HomePage() {
   return (
      <div className="main">
         <Hero />
         <About />
         <Feature />
         <Works />
         <Faq />
         <Pricing />
         <Contact />
      </div>
   )
}
