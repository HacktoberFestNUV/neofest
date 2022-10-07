import React, { useState } from 'react'
import '../styles/eventimagecard.css'

function EventImageCard(props) {

    const [grayScale, setGrayScale] = useState('grayscale()');
    const [opacity, setOpacity] = useState('.6');
    
    const backgroundImage ={
        backgroundImage: `url(${props.image_path})`,
        filter: `${grayScale}`,
        opacity: `${opacity}`,
    }

    const onHover = () => {
        props.updateTitle(props.event_title)
        props.updateDate(props.event_date)
        props.updateTime(props.event_time)
        setGrayScale('')
        setOpacity('')
    }

    const onLeave = () => {
        props.updateTitle('Events')
        props.updateDate('')
        props.updateTime('')
        setGrayScale('grayscale()')
        setOpacity('.6')
    }

  return (
    <>
        <div onMouseEnter={onHover} onMouseLeave={onLeave} style={backgroundImage} className='w-[150px] h-[600px] mx-3 hover:w-[250px] transition-all duration-300' id='event-image-card'>
        </div>
    </>

  )
}

export default EventImageCard