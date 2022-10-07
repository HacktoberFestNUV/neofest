import React, { useState } from "react";
import EventImageCard from "../components/EventImageCard";
import EventTitle from "../components/EventTitle";

function Events() {
  const [eventTitle, setEventTitle] = useState('Events')
  const [eventDate, setEventDate] = useState('')
  const [eventTime, setEventTime] = useState('')

  let image_paths = [];
  image_paths.push('https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  image_paths.push('https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  // image_paths.push('https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  image_paths.push('https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

  let event_titles = [];
  event_titles.push('Git/GitHub Workshop')
  event_titles.push('Some bullshit')
  event_titles.push('Another bullshit')

  let event_dates = [];
  event_dates.push('14 October')
  event_dates.push('15 October')
  event_dates.push('16 October')

  let event_times = [];
  event_times.push('1pm Onwards')
  event_times.push('2pm Onwards')
  event_times.push('3pm Onwards')

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
    <div className="w-screen h-[100vh] flex flex-col justify-center items-center border-4 border-red-600">

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
