import React, { useState } from "react";
import EventImageCard from "../components/EventImageCard";
import EventTitle from "../components/EventTitle";

function Events() {
  const [eventTitle, setEventTitle] = useState('Events')
  const [eventDate, setEventDate] = useState('')
  const [eventTime, setEventTime] = useState('')

  let image_paths = [];
  image_paths.push('https://i.ibb.co/JrcnyDH/workshop.webp')
  image_paths.push('https://i.ibb.co/2sJQPbG/talks.webp')
  image_paths.push('https://i.ibb.co/fdW1HQ7/hackathon.webp')

  let event_titles = [];
  event_titles.push('Workshops')
  event_titles.push('Talks')
  event_titles.push('Hackathon')

  let event_dates = [];
  // event_dates.push('14 October')
  // event_dates.push('15 October')
  // event_dates.push('16 October')

  let event_times = [];
  // event_times.push('1pm Onwards')
  // event_times.push('2pm Onwards')
  // event_times.push('3pm Onwards')

  const updateTitle = (value) => {
    setEventTitle(value);    
  }
  const updateDate = (value) => {
    setEventDate(value);    
  }
  const updateTime = (value) => {
    setEventTime(value);
  }

  return (
    <div className="w-screen h-[100vh] flex flex-col justify-center items-center bg-[#170F1E]">
      <div className="w-full flex justify-center items-center ">
        {image_paths.map((path, index) => {
          return <EventImageCard key={index} image_path={path} event_title={event_titles[index]} event_date={event_dates[index]} event_time={event_times[index]} updateTitle={updateTitle} updateDate={updateDate} updateTime={updateTime}/>
        })}
      </div>
    <EventTitle title={eventTitle} date={eventDate} time={eventTime}/>
    </div>

  );
}

export default Events;
