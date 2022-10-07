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
        props.updateDate('From 15 October')
        props.updateTime('To 18 October')
        setGrayScale('grayscale()')
        setOpacity('.6')
    }

    const onMobileTap = () => {
        props.updateTitle(props.event_title)
        props.updateDate(props.event_date)
        props.updateTime(props.event_time)
        setGrayScale('')
        setOpacity('')
        setTimeout(() => {
            onLeave()
        }, 1250);
    }

  return (
    <>
        <div onMouseEnter={onHover} onClick={onMobileTap} onMouseLeave={onLeave} style={backgroundImage} className='md:w-[150px] md:h-[600px] w-[110px] h-[450px] mx-2 md:mx-3 hover:md:w-[250px] transition-all duration-300' id='event-image-card'>
        </div>
    </>

  )
}

export default EventImageCard