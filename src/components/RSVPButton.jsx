import React from "react";
import { Button } from "@cred/neopop-web/lib/components";
import { signInWithGoogle } from "../firebase";
function RSVPButton(props) {

    let user = props.user
    let buttonText = ''
    let disabled = false;
    if(!user){
        buttonText = 'RSVP Now!'
    }
    else{
        buttonText = 'Thank you!'
        disabled=true
        let hero = document.getElementById('hero')
        hero.classList.remove('background-bw')
        // let rsvpButton = document.getElementById('rsvp-button')
        // rsvpButton.removeEventListener('mouseenter', bwBG)
    }
    
    const bwBG = () => {
        let hero = document.getElementById('hero')
        hero.classList.remove('background-bw')
    }

    const normalBG = () => {
        let hero = document.getElementById('hero')
        if(!user){
            hero.classList.add('background-bw')
        }
    }

  return (
    <div onMouseEnter={bwBG} onMouseLeave={normalBG} className="fixed md:top-[60%] md:left-[42.5%] md:w-[300px] top-[45%]" id="rsvp-button">
      <Button
        style={{ height: "fit-content" }}
        variant="secondary"
        kind="elevated"
        size="big"
        colorMode="dark"
        fullWidth={true}
        colorConfig={{backgroundColor: '#FFEB34', borderColor: "black", color: 'black', edgeColors:{left:'#7B6F00', right:'#7B6F00', top:'#7B6F00', bottom:'#7B6F00'}, disabledColors:{backgroundColor:'#121212', borderColor:'#3D3D3D', edgeColors:{left:'#3D3D3D', right:'#3D3D3D', top:'#3D3D3D', bottom:'#3D3D3D'}}}}
        spacingConfig={{padding: '5px', height:'60px' }}
        textStyle={{fontSize:25, fontWeight:600}}
        disabled={disabled}
        onClick={signInWithGoogle}
      >
        {buttonText}
      </Button>
      {user && (
        <div className="text-white font-semibold text-lg flex justify-center items-center mt-4 text-center">
            {`See you at NeoFest, ${user.displayName}!`}
        </div>
      )}
      <div className="text-white font-semibold text-lg flex justify-center items-center mt-4 text-center">
        Event details coming soon!
      </div>
    </div>
  );
}

export default RSVPButton;
