import React from 'react'

function Footer() {
  return (
    <div className='fixed bottom-0 h-10 md:h-11 w-screen flex justify-evenly items-center text-white text-lg md:text-xl bg-black'>
        <h1 className=''>NeoFest 2022</h1>
        <h1><a className='text-[#FFEB34] md:text-white hover:text-[#FFEB34]' href="mailto:hacktoberfest@nuv.ac.in">Mail us</a></h1>
    </div>
  )
}

export default Footer