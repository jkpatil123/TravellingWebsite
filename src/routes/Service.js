
import Navbar from '../components/Navbar';
import night from '../assets/8.jpg'
import Hero from '../components/Hero';
import Footer from '../components/Footer.js';

function Service() {
  return (
    <>
    <Navbar/>
   <Hero 
      cName="hero-mid"
      heroImage={night}
      title="Service"
      
      btnClass="hide"
   />
   <Footer />
  </>
  )
}

export default Service ;