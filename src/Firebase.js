// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3cAGwFGDaNpIMpiEXLUS2hXCMckVchiA",
  authDomain: "auth-4195f.firebaseapp.com",
  projectId: "auth-4195f",
  storageBucket: "auth-4195f.appspot.com",
  messagingSenderId: "46231654831",
  appId: "1:46231654831:web:caee8b92bb10f465575f5a",
  measurementId: "G-LEXW6MHCVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth,provider)
    .then((result) => {
        console.log(result);
        let googleData = {};
        const name = result.user.displayName;
        const email = result.user.email
        const profilePicture = result.user.photoURL;
        googleData ={
            name,email,profilePicture
        }
        localStorage.setItem("auth",JSON.stringify(googleData));
    }).catch((error) => {
        console.log(error)
    })
}