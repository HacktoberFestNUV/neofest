import React from "react";

function EventTitle(props) {
  return (
    <div>
      <div className="text-5xl text-center mt-10">{props.title}</div>
      <div className="flex gap-[100px] justify-between">
        <div className="text-xl mt-6">{props.date}</div>
        <div className="text-xl mt-6">{props.time}</div>
      </div>
    </div>
  );
}

export default EventTitle;
