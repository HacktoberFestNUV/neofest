import { useEffect, useState } from "react";
// import { collection, addDoc} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
// import { logout } from "./firebase";
// import Header from './sections/Header';
import FAQ from './sections/FAQ';
import Hero from "./sections/Hero";
// import Events from "./sections/Events";
import Timeline from "./sections/Timeline";
// import PastEvents from "./sections/PastEvents";
import About from "./sections/About";
import Sponsors from "./sections/Sponsors";
// import Footer from "./sections/Footer";
// import EventCarousel from "./sections/EventCarousel";
import "./App.css";
import Hackathon from "./sections/Hackathon";

function App() {
  const [user] = useAuthState(auth);
  const [userPresent, setUserPresent] = useState(false)

  useEffect(() => {
    if(user) setUserPresent(true)
    else setUserPresent(false)
  }, [user]);

  return (
    <div className="w-screen h-fitcontent flex flex-col items-center overflow-x-hidden">
      {/* <button onClick={logout}>Sign out</button> */}
      {/* <Header/> */}
      {!user && <Hero userPresent={userPresent}/>}
      {user && <Hero user={user} userPresent={userPresent} />}
      {/* <Events/> */}
      {/* <PastEvents/> */}
      <Hackathon />
      <Timeline/>
      <FAQ/>
      <Sponsors/>
      <About/>
      {/* <EventCarousel/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
