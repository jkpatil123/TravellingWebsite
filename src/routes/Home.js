import Destination from '../components/Destination.js';
import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroImage from '../assets/12.jpg'
import Trip from '../components/Trip.js';
import Footer from '../components/Footer.js';

function Home() {
  return (
   <>
   <Navbar/>
    <Hero 
       cName="hero"
       heroImage={HeroImage}
            title="You Journey Your Story"
       text="Choose Your favourite Destination"
       buttonText="Travel Plan"
       url="/"
       btn="show"
    />
    <Destination/>
    <Trip />
    <Footer/>
   </>
  )
}

export default Home;