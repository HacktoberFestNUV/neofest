import React from 'react'

function About() {
  return (
    <div className='w-screen h-[90vh] md:[60vh] text-white flex flex-col justify-evenly items-center gap-4 bg-black'>
        <h1 className=' w-full flex justify-center items-center text-4xl md:text-6xl font-extrabold font-heading'>About us</h1>
        <div className='h-fitcontent text-lg md:text-2xl w-[80%] text-center '>
          We students of Navrachana University, Vadodara are organising a technical event “NEOFEST” in accordance to HacktoberFest’22. This event generally focuses on the Open-Source environment which will provide an immense exposure to the participants. It is a two day event which will consist of various executive talks, workshops and hackathon to engage the participants throughout the event.
        </div>
        <div className='h-fitcontent text-sm md:text-lg w-[95%] text-center '>
          Made with ❤️ by HacktoberFest NUV Team
        </div>
    </div>
  )
}

export default About