import React, { useState } from 'react'
import '../styles/eventimagecard.css'

function EventImageCard(props) {

    const [grayScale, setGrayScale] = useState('grayscale()');
    
    const backgroundImage ={
        backgroundImage: `url(${props.image_path})`,
        filter: `${grayScale}`
    }

    const onHover = () => {
        props.updateTitle(props.image_title)
        setGrayScale('')
    }

    const onLeave = () => {
        props.updateTitle('Events')
        setGrayScale('grayscale()')
    }

  return (
    <>
        <div onMouseEnter={onHover} onMouseLeave={onLeave} style={backgroundImage} className='w-[150px] h-[600px] mx-3 hover:w-[250px] transition-all duration-300' id='event-image-card'>
        </div>
    </>

  )
}

export default EventImageCard