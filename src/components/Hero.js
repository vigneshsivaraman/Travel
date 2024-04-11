import React from "react";
import "../components/Hero.css";


const Hero = (props) => {

  return (
    <div className={props.cName}>
      <img alt="Heroimg" src={props.heroImg} />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>
          {props.text}
        </p>
        <a href={props.url} className={props.btnclass}>{props.buttontext}</a> 
      </div>
    </div>
  );
};

export default Hero;
