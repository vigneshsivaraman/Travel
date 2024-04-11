import React from 'react'
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import aboutimg from "../assets/about.jpg"
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
const About = () => {
  return (
    <div>
       <NavBar />
      <Hero
      cName="hero-mid"
      heroImg={aboutimg}
      title="About"
      btnclass="hide"
       />
       <AboutUs />
       <Footer />
    </div>
  )
}

export default About