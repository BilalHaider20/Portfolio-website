import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contactform from './components/contactform'
import Work from './components/Work'
import Footer from './components/footer'
function App() {
  

  return (
    <> 
      <Navbar />
      <Hero />
      <Skills />
      <Work/>
      <Contactform />
      <Footer/>
    </>
  )
}

export default App
