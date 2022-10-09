import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="w-screen h-[90vh] md:[60vh] text-white flex flex-col justify-evenly items-center gap-4 bg-black">
      <h1 className=" w-full flex justify-center items-center text-4xl md:text-6xl font-extrabold font-heading">
        About us
      </h1>
      <div className="h-fitcontent text-lg md:text-2xl w-[80%] text-center ">
        We students of Navrachana University, Vadodara are organising a
        technical event “NEOFEST” in accordance to HacktoberFest’22. This event
        generally focuses on the Open-Source environment which will provide an
        immense exposure to the participants. It is a two day event which will
        consist of various executive talks, workshops and hackathon to engage
        the participants throughout the event.
      </div>
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="text-4xl font-bold my-4">Connect With Community</h1>
        <div className="my-3 flex justify-evenly items-center w-1/2">
          <a
            href="https://discord.gg/CajCTnMcjD"
            className="flex p-2 justify-between items-center w-32  rounded-md bg-[#30353f] hover:scale-110 transition-all ease-in-out duration-150"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./discord.svg" alt="discord" />
            Discord
          </a>
          <a
            href="https://linktr.ee/neofest"
            className="flex p-2 justify-between items-center w-32  rounded-md bg-[#30353f] hover:scale-110 transition-all ease-in-out duration-150"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./linktree.svg" alt="linktree" />
            Linktree
          </a>
          <a
            href="https://form.typeform.com/to/ZsWJTT4F"
            className="flex p-2 justify-between items-center w-fit  rounded-md bg-[#30353f] hover:scale-110 transition-all ease-in-out duration-150"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./typeform.png" alt="form" className="w-12 h-12" />
            CFP Form
          </a>
        </div>
      </div>
      <div className="h-fitcontent text-sm md:text-lg w-[95%] text-center ">
        Made with ❤️ by HacktoberFest NUV Team
      </div>
    </div>
  );
}

export default About;
