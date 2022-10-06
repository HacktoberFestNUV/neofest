import RSVPButton from "./RSVPButton";
import React, { useEffect, useState } from "react";
import "../styles/hero.css";

function Hero(props) {

  const isMobile = window.innerWidth < 815;
  let default_bg = ''
  if(!isMobile) default_bg = 'background-bw'
  console.log(default_bg);

  const [grayScale, setGrayScale] = useState(default_bg)

  const addGrayScale = () => {
    if(!props.userPresent && !isMobile) setGrayScale('background-bw')
  }

  const removeGrayScale = () => {
    setGrayScale('')
  }

  useEffect(() => {
    if(props.userPresent) setGrayScale('')
    else {
      if(!isMobile)
      setGrayScale('background-bw')
    }
  }, [props.userPresent, isMobile])

  
  return (
    <>
      <div className={`background ${grayScale} flex flex-col w-screen justify-center items-center`} id="hero">
        <h1
          className="fixed bg-transparent text-transparent bg-clip-text font-bold text-[4rem] text-center top-[20%] bg-gradient-to-r from-[#BFA8FF] via-[#FABAA4] to-[#FFF08C] md:invisible"
          id="mobile-text"
        >
          NeoFest
        </h1>
      </div>
      <RSVPButton user={props.user} addGrayScale={addGrayScale} removeGrayScale={removeGrayScale}/>
    </>
  );
}

export default Hero;
