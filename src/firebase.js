// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjabNMxI75jIPv8Npn-tJhpvcNGpewKOg",
  authDomain: "orlandowb-f81c8.firebaseapp.com",
  projectId: "orlandowb-f81c8",
  storageBucket: "orlandowb-f81c8.appspot.com",
  messagingSenderId: "1051244156713",
  appId: "1:1051244156713:web:56380706902ecab2a9c938",
  measurementId: "G-N7ER5427EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);