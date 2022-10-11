import React from "react";

function EventTitle(props) {
  return (
    <div className="text-white">
      <div className="text-4xl md:text-6xl text-center mt-10 font-heading font-extrabold bg-gradient-to-r from-[#BFA8FF] via-[#FABAA4] to-[#FFF08C] bg-transparent text-transparent bg-clip-text">{props.title}</div>
      {/* <div className="flex gap-[100px] justify-between"> */}
        {/* <div className="md:text-xl text-md pl-2 mt-6">{props.date}</div> */}
        {/* <div className="md:text-xl text-md pr-2 mt-6">{props.time}</div> */}
      {/* </div> */}
    </div>
  );
}

export default EventTitle;
