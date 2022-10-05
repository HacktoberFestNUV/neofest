import { useEffect, useState } from "react";
// import { collection, addDoc} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
// import { logout } from "./firebase";
// import Header from './sections/Header';
// import FAQ from './sections/FAQ';
import Hero from "./sections/Hero";
import Events from "./sections/Events";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);
  const [userPresent, setUserPresent] = useState(false)
  // const [email, setEmail] = useState('')
  // const [name, setName] = useState('')

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     await addDoc(collection(database, "people"), {
  //       name: name,
  //       email: email,
  //     });
  //   } catch (error) {
  //     alert(error);
  //   }

  //   setEmail("");
  //   setName("");
  //   console.log('clicked');
  // }

  useEffect(() => {
    if(user) setUserPresent(true)
    else setUserPresent(false)
  }, [user]);

  return (
    <div className="w-screen h-fitcontent flex flex-col items-center overflow-auto">
      {/* <button onClick={logout}>Sign out</button> */}
      {/* <Header/> */}
      {!user && <Hero userPresent={userPresent}/>}
      {user && <Hero user={user} userPresent={userPresent} />}
      <Events/>
      {/* <FAQ/> */}
    </div>
  );
}

export default App;
