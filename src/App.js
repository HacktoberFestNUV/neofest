import { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { database, auth, signInWithGoogle, logout } from "./firebase";

import './App.css';

function App() {

  const [user] = useAuthState(auth)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await addDoc(collection(database, "people"), {
        name: name,
        email: email,
      });
    } catch (error) {
      alert(error);
    }

    setEmail("");
    setName("");
    console.log('clicked');
  }

  useEffect(() => {
    if(user) console.log(user);
  }, [user])
  
  return (
    <>
    {user && <pre>Logged in as {user.displayName}</pre>}
    {user && <button onClick={logout}>Sign out</button>}
    <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
    <input type='text' value={email} onChange={(event) => setEmail(event.target.value)}/>
    <button type='submit' onClick={(event) => handleSubmit(event)}>Submit</button>
    <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}

export default App;
