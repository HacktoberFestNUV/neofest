import RSVPButton from "../components/RSVPButton";
import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import { getRsvpCount } from "../firebase";
import CountUp from 'react-countup';

function Hero(props) {

  const [rsvpCount, setRsvpCount] = useState(0);
  const isMobile = window.innerWidth < 815;
  let default_bg = ''
  if (!isMobile) default_bg = 'background-bw'
  console.log(default_bg);

  const [grayScale, setGrayScale] = useState(default_bg)

  const addGrayScale = () => {
    if (!props.userPresent && !isMobile) setGrayScale('background-bw')
  }

  const removeGrayScale = () => {
    setGrayScale('')
  }

  useEffect(() => {
    if (props.userPresent) setGrayScale('')
    else {
      if (!isMobile)
        setGrayScale('background-bw')
    }
  }, [props.userPresent, isMobile])

  useEffect(async () => {
    const data = await getRsvpCount()
    setRsvpCount(data)
  }, []);


  return (
    <>
      <div className={`background ${grayScale} flex flex-col w-screen justify-center items-center`} id="hero">
        <h1
          className="absolute bg-transparent text-transparent bg-clip-text font-bold text-[4rem] text-center top-[20%] bg-gradient-to-r from-[#BFA8FF] via-[#FABAA4] to-[#FFF08C] md:invisible"
          id="mobile-text"
        >
          NeoFest
        </h1>
        <div className="invisible md:visible" id="clipart-1"></div>
        <div className="invisible md:visible" id="clipart-2"></div>
      </div>
      <button type="button" class="absolute top-10 right-10 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2">RSVPED: <CountUp end={rsvpCount} duration={1} /></button>
      <RSVPButton user={props.user} addGrayScale={addGrayScale} removeGrayScale={removeGrayScale} rsvpCount={rsvpCount} />
    </>
  );
}

export default Hero;
