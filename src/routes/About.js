
import React from 'react'
import Navbar from '../components/Navbar';
import night from '../assets/night.jpg'
import Hero from '../components/Hero';
import Footer from '../components/Footer.js';
import AboutUs from '../components/AboutUs';

function About() {
  return (
   <>
     <Navbar/>
    <Hero 
       cName="hero-mid"
       heroImage={night}
       title="About"
       
       btnClass="hide"
    />
      <AboutUs/>
      <Footer />
   </>
  )
}

export default About;