import React from 'react'
import '../styles/sponsors.css'

function Sponsors() {
  return (
<div className="w-screen h-fitcontent text-white pt-8 pb-8 flex flex-col justify-center items-center md:gap-2 gap-4 bg-[#170F1E]">
      <div className=" w-full mb-4 md:mb-16 flex justify-center items-center text-4xl md:text-6xl">
        <h1 className="text-4xl md:text-6xl text-center font-heading font-extrabold bg-gradient-to-r from-[#BFA8FF] via-[#FABAA4] to-[#FFF08C] bg-transparent text-transparent bg-clip-text">
          Sponsors
        </h1>
      </div>
      <div className=" w-full flex justify-center items-center">
        <h1 className="text-2xl md:text-4xl text-center font-heading bg-gradient-to-r from-[#BFA8FF] via-[#FABAA4] to-[#FFF08C] bg-transparent text-transparent bg-clip-text">
          Powered by
        </h1>
      </div>

      <div className="h-fitcontent flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center flex-wrap text-lg w-[80%] text-center" id='sponsor-box-1'>
        <div className='md:w-1/2 w-full flex flex-col justify-center items-center gap-4'>
            <h1 className='text-base md:text-2xl font-heading font-medium text-[#FABAA4]'>Title Sponsor</h1>
            <div>
                <img src="" alt="" id='roundtech'/>
            </div>
        </div>
        <div className='md:w-1/2 w-full flex flex-col justify-center items-center gap-4 '>
            <h1 className='text-base md:text-2xl font-heading font-medium text-[#FABAA4]'>Ecosystem Sponsors</h1>
            <div className='w-full flex justify-center items-center gap-6 md:gap-0 flex-wrap'>
                <div className='md:w-1/2 w-[200px] flex justify-center items-center'>
                    <img src="" alt="" id='devfolio'/>
                </div>
                <div className='md:w-1/2 w-[200px] flex justify-center items-center'>
                    <img src="" alt="" id='polygon'/>
                </div>
            </div>
        </div>
      </div>

      <div className="w-full md:mt-16 mt-10 flex justify-center items-center">
        <h1 className="text-2xl md:text-4xl text-center font-heading bg-gradient-to-r from-[#BFA8FF] via-[#FABAA4] to-[#FFF08C] bg-transparent text-transparent bg-clip-text">
          Supported by
        </h1>
      </div>

      <div className="h-fitcontent flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 flex-wrap w-[45%] md:w-[70%]" id='sponsor-box-2'>
        <div className='md:w-1/3 flex justify-center items-center'>
            <img src="" alt="" id='replit'/>
        </div>
        <div className='md:w-1/3 flex justify-center items-center'>
            <img src="" alt="" id='solana'/>
        </div>
        <div className='md:w-1/3 flex justify-center items-center'>
            <img src="" alt="" id='filecoin'/>
        </div>
      </div>
    </div>
  )
}

export default Sponsors