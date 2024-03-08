import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutme from './components/About'
import Skills from './components/Skills'
import Contactform from './components/contactform'
import Work from './components/Work'
import Footer from './components/footer'

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(".show");
      }
      else {
        entry.target.classList.remove(".show");
      }
    });
  }
);
function App() {
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(
    (el) => observer.observe(el)
  );
  return (
    <> 
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Work/>
      <Contactform />
      <Footer/>
    </>
  )
}

export default App
