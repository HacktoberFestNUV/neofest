import React from "react";
import { Button } from "@cred/neopop-web/lib/components";
import { signInWithGoogle } from "../firebase";
function RSVPButton(props) {

    let user = props.user
    let buttonText = ''
    let buttonDisabled = false;

    if(user){
      buttonText = 'Thank you!'
      buttonDisabled=true
    }
    else{
      buttonText = 'RSVP Now!'
    }

  return (
    <div onMouseEnter={props.removeGrayScale} onMouseLeave={props.addGrayScale} className="absolute md:top-[60%] md:w-[300px] top-[32%]" id="rsvp-button">
      <Button
        style={{ height: "fit-content" }}
        variant="secondary"
        kind="elevated"
        size="big"
        colorMode="dark"
        fullWidth={true}
        colorConfig={{backgroundColor: '#FFEB34', borderColor: "black", color: 'black', edgeColors:{left:'#7B6F00', right:'#7B6F00', top:'#7B6F00', bottom:'#7B6F00'}, disabledColors:{backgroundColor:'#121212', borderColor:'#3D3D3D', edgeColors:{left:'#3D3D3D', right:'#3D3D3D', top:'#3D3D3D', bottom:'#3D3D3D'}}}}
        spacingConfig={{padding: '5px', height:'60px' }}
        textStyle={{fontSize:20, fontWeight:600}}
        disabled={buttonDisabled}
        onClick={signInWithGoogle}
      >
        {buttonText}
      </Button>
      {user && (
        <div className="text-white font-semibold md:text-lg text-xs flex justify-center items-center mt-4 text-center">
            {`See you at NeoFest, ${user.displayName}!`}
        </div>
      )}
      <div className="text-white font-semibold md:text-lg text-xs flex justify-center items-center mt-1 text-center">
        Event details coming soon!
      </div>
    </div>
  );
}

export default RSVPButton;
