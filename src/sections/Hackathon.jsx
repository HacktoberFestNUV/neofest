import React from 'react'

const Hackathon = () => { 
  return (
    <div className="pt-28 py-20 w-screen h-fit bg-[#170F1E] text-center flex flex-col justify-evenly items-center text-[#FFFEFE]">
      <h1 className="text-4xl md:text-6xl text-center font-heading font-extrabold bg-gradient-to-r from-[#BFA8FF] via-[#FABAA4] to-[#FFF08C] bg-transparent text-transparent bg-clip-text">
        NeoHacks
      </h1>
      <div className="h-fit font-thin text-lg md:text-xl w-[80%] md:w-[70%] lg:w-[50%] my-5">
        NeoHacks is an Open-source focused, beginner friendly hackathon.
        <br />
        The main aim is to motivate new devs to contribute to the community and
        work collaboratively to solve problems. To faciliate this, we would be
        providing mentors who would provide guidance on problem solving, work
        flow, creative thinking, and actual implementation.
        <br />
        <br />
        This hackathon provides opportunity for participants to network with
        amazing new developers and complete their hacktober quest at the same
        time! And getting awesome swags along the way is always a plus :D
      </div>
      {/* <div
        className="apply-button h-[44px] w-[312px]"
        data-hackathon-slug=""
        data-button-theme="dark"
      ></div> */}
      {/* <div
        className="apply-button h-[44px] w-[312px]"
        data-hackathon-slug="neohacks"
        data-button-theme="dark-inverted"
        // style="height: '44px'; width: '312px'"
      ></div> */}
    </div>
  );
}

export default Hackathon