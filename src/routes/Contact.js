import Navbar from '../components/Navbar';
import night from '../assets/2.jpg'
import Hero from '../components/Hero';
import Footer from '../components/Footer.js';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <>
    <Navbar/>
   <Hero 
      cName="hero-mid"
      heroImage={night}
      title="Contact"
      
      btnClass="hide"
   />
   <ContactForm/>
   <Footer/>
  </>
  )
}

export default Contact;