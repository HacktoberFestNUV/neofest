import React, { useState } from "react";
import EventImageCard from "../components/EventImageCard";
import EventTitle from "../components/EventTitle";

function Events() {

  let image_paths = [];
  image_paths.push('https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  image_paths.push('https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  // image_paths.push('https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  image_paths.push('https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

  let image_titles = [];
  image_titles.push('title 1')
  image_titles.push('title 2')
  image_titles.push('title 3')


  const [eventTitle, setEventTitle] = useState('Events')

  const updateTitle = (value) => {
    setEventTitle(value);    
  }
  
  return (
    <div className="w-screen h-[100vh] flex flex-col justify-center items-center border-4 border-red-600">

      <div className="w-full flex justify-center items-center ">
        {/* <EventImageCard image_path={image_paths[0]}/>
        <EventImageCard image_path={image_paths[1]}/>
        <EventImageCard/>
        <EventImageCard/>
        <EventImageCard/> */}
        {image_paths.map((path, index) => {
          return <EventImageCard key={index} image_path={path} image_title={image_titles[index]} updateTitle={updateTitle}/>
        })}
      </div>
    <EventTitle title={eventTitle}/>
    </div>

  );
}

export default Events;
