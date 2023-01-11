// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuSROJGIGNoqHitU0TR-OfpY4arH5Sk-Y",
  authDomain: "tv-bazar-project.firebaseapp.com",
  projectId: "tv-bazar-project",
  storageBucket: "tv-bazar-project.appspot.com",
  messagingSenderId: "573586515541",
  appId: "1:573586515541:web:acc382d7298d38f80b56dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;