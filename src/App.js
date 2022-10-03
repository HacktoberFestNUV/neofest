import { useEffect } from 'react';
// import { collection, addDoc} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {  auth } from "./firebase";
// import Header from './components/Header';
// import FAQ from './components/FAQ';
// import RSVPButton from './components/RSVPButton';
import Hero from './components/Hero';

import './App.css';

function App() {

  const [user] = useAuthState(auth)
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
    if(user) console.log(user);
  }, [user])
  
  return (
    <div className='w-screen h-fitcontent flex flex-col items-center overflow-auto'>
    {/* <button onClick={logout}>Sign out</button> */}
    {/* <Header/> */}
    {!user && <Hero/>}
    {user && <Hero user={user}/>}
    {/* <button onClick={signInWithGoogle} className='border-2 border-black'>Sign in with Google</button> */}
    
    {/* <FAQ/> */}
    </div>
  )
}

export default App;
