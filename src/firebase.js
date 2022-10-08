import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDdQAXbJBJ50d47Hh8LDhBGUbAHwb2VVpg",
  authDomain: "neofest-e1055.firebaseapp.com",
  projectId: "neofest-e1055",
  storageBucket: "neofest-e1055.appspot.com",
  messagingSenderId: "1080635997977",
  appId: "1:1080635997977:web:a91b11980a73dcfcc0cf88",
  measurementId: "G-9MGYCH5ST8"
};


const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async (event) => {
  event.preventDefault()
  try {
    const response = await signInWithPopup(auth, googleProvider)
    const user = response.user;
    const q = query(collection(database, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(database, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email
      })
    }
  }
  catch (error) {
    alert(error.message);
  }
}

const getRsvpCount = async () => {
  const q = collection(database, 'users')
  const docs = await getDocs(q)
  return(docs._snapshot.docChanges.length);
}

// const logInWithEmailAndPassword = async (event, email, password) => {
//   event.preventDefault();
//   try {
//     await signInWithEmailAndPassword(auth, email, password)
//   }
//   catch(error){
//     alert(error.message)
//     window.location.reload()
//   }
// }

// const registerUserWithEmailAndPassword = async (event, name, email, password) => {
//   event.preventDefault()
//   if(!name) {
//     alert("Name cannot be blank <3")
//     return
//   }
//   try {
//     const response = await createUserWithEmailAndPassword(auth, email, password)
//     const user = response.user
//     await addDoc(collection(database, 'users'), {
//       uid: user.uid,
//       displayName: name,
//       authProvider: 'local',
//       email: email,
//     })
//   }
//   catch(error){
//     alert(error.message)
//   }
// }

// const sendPasswordReset = async (email) => {
//   try{
//     await sendPasswordResetEmail(auth, email)
//     alert('Reset Link Sent <3')
//   }
//   catch(error) {
//     alert(error.message)
//   }
// }

const logout = () => {
  signOut(auth);
}

export {
  auth,
  signInWithGoogle,
  getRsvpCount,
  //   logInWithEmailAndPassword, 
  //   registerUserWithEmailAndPassword,
  //   sendPasswordReset, 
  logout
};

