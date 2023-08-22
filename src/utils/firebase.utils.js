// Import the functions you need from the SDKs you need
import userEvent from "@testing-library/user-event";
import { initializeApp } from "firebase/app";

import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

// importing utilities to setup firestor database
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCepb6YxskZ0YswPRSfFhtN35SoHsbqyOM",
  authDomain: "fly-fashion-db.firebaseapp.com",
  projectId: "fly-fashion-db",
  storageBucket: "fly-fashion-db.appspot.com",
  messagingSenderId: "837999436441",
  appId: "1:837999436441:web:d560c3b3bf92954ffa4e08"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Setting up authentication
const googleProvider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

// Instantiating a Firestore db instance
export const db = getFirestore();


// Creating a user document in firestore db using the authenticated user's details
export async function createUserDocumentFromAuth(userAuth,additionalInfo={}) {
  
  const userDocRef = doc(db,"users",userAuth.uid); 
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    }
    catch(error){
      console.log("Error creating the user document", error.message);
    }
  }
  return userDocRef;
}


// Authenticating user with email and password signup
export async function createAuthWithEmailAndPassword(email,password){
  if(!email || !password){
    return;
  } else {
    return await createUserWithEmailAndPassword(auth,email,password);
  }
}

// Signing User with Email and Password
export async function signUserInWithEmailAndPassword(email,password){
  return await signInWithEmailAndPassword(auth,email,password)
}
