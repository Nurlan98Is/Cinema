// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgbF1oesU5oGaWC_RrhqJaHQ6rdJaCz9Q",
  authDomain: "cinemate-ffade.firebaseapp.com",
  projectId: "cinemate-ffade",
  storageBucket: "cinemate-ffade.firebasestorage.app",
  messagingSenderId: "981575632875",
  appId: "1:981575632875:web:2f14495efaf29d865cfbae",
  measurementId: "G-83W2SFWF1K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
