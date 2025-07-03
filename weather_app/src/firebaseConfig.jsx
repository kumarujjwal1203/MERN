// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApidcbsn57fNIat3o_6_EmUPeq13VNmZY",
  authDomain: "weather-55f91.firebaseapp.com",
  projectId: "weather-55f91",
  storageBucket: "weather-55f91.firebasestorage.app",
  messagingSenderId: "969106251172",
  appId: "1:969106251172:web:23a5e87290fc755b79b531",
  measurementId: "G-VKR21YL7VM",
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth service
const auth = getAuth(app);

// Create Google provider instance
const provider = new GoogleAuthProvider();

// Function to trigger Google Sign-In popup
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth };
