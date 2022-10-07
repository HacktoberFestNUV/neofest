import React from 'react'
import '../styles/pasteventimagecard.css'

function PastEventImageCard() {

  return (


    <div className="container w-[500px] h-[500px]">
        <div className="blur"></div>
        <div className="img_contain">
            <img src="https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='x' className="image"></img>
            <div className="title">CSS IS AWESOME</div>
        </div>
    </div>

    // <div id='container' className='w-[200px] h-[200px] border-2 border-black'>
    //     <div id='blur'></div>
    //     <div id='img_contain'>
    //         <div id='title' className='text-black'>Some text</div>
    //     </div>
    // </div>
  )
}

export default PastEventImageCard