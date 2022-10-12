import React from "react";
import { Button } from "@cred/neopop-web/lib/components";
import { signInWithGoogle } from "../firebase";
// import  CountUp  from "react-countup";
function RSVPButton(props) {

    let user = props.user
    let buttonText = ''
    let buttonDisabled = false;

    if(user){
      buttonText = 'Thank you!'
      buttonDisabled=true
    }
    else{
      buttonText = 'RSVP Now'
    }

  return (
    <div
      onMouseEnter={props.removeGrayScale}
      onMouseLeave={props.addGrayScale}
      className="absolute md:top-[60%] md:w-[300px] top-[32%]"
      id="rsvp-button"
    >
      {/* <div className="text-white font-semibold text-lg flex justify-center items-center mb-2 text-center">
        <p>RSVPED: <CountUp end={props.rsvpCount} duration={1} /></p>
      </div> */}
      {/* <Button
        style={{ height: "fit-content" }}
        variant="secondary"
        kind="elevated"
        size="big"
        colorMode="dark"
        fullWidth={true}
        colorConfig={{
          backgroundColor: "#FFEB34",
          borderColor: "black",
          color: "black",
          edgeColors: {
            left: "#7B6F00",
            right: "#7B6F00",
            top: "#7B6F00",
            bottom: "#7B6F00",
          },
          disabledColors: {
            backgroundColor: "#121212",
            borderColor: "#3D3D3D",
            edgeColors: {
              left: "#3D3D3D",
              right: "#3D3D3D",
              top: "#3D3D3D",
              bottom: "#3D3D3D",
            },
          },
        }}
        spacingConfig={{ padding: "5px", height: "60px" }}
        textStyle={{ fontSize: 20, fontWeight: 600 }}
        disabled={buttonDisabled}
        onClick={signInWithGoogle}
      >
        {buttonText}
      </Button> */}

      <div
        className="apply-button h-[44px] w-[312px]"
        data-hackathon-slug="neohacks"
        data-button-theme="dark-inverted"
        // style="height: '44px'; width: '312px'"
      ></div>

      {user ? (
        <div className="text-white font-semibold md:text-lg text-xs flex justify-center items-center mt-4 text-center">
          {`See you at NeoFest, ${user.displayName}!`}
        </div>
      ) : (
        <div className="text-white font-semibold md:text-lg text-xs flex justify-center items-center mt-1 text-center">
          Register now with Google!
        </div>
      )}
    </div>
  );
}

export default RSVPButton;
