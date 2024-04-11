import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import main from "../assets/main.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero
      cName="hero"
      heroImg={main}
      title="Create your Own Memories"
      text="Embarking on journeys, discovering landscapes, and creating unforgettable memories."
      buttontext="Travel Plan"
      url="/"
      btnclass="show"
       />
       <Destination />
       <Trip />
       <Footer />
    </>
  );
};

export default Home;
