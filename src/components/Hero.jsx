import RSVPButton from "./RSVPButton";
import React from "react";
import "../styles/hero.css";

function Hero(props) {
  return (
    <>
      <div className="background" id="hero">
        <h1
          className="fixed bg-transparent text-transparent bg-clip-text font-bold text-[4rem] top-[25%] left-[12.5%] text-center mb-6 bg-gradient-to-r from-[#BFA8FF] via-[#FABAA4] to-[#FFF08C] md:invisible"
          id="mobile-text"
        >
          NeoFest
        </h1>
      </div>
      <RSVPButton user={props.user} />
    </>
  );
}

export default Hero;
