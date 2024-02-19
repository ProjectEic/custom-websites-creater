// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAecWFLFqwNbC8T0eRir3wtCuxo95Lezos",
  authDomain: "clientwebsitegentestapp.firebaseapp.com",
  databaseURL: "https://clientwebsitegentestapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "clientwebsitegentestapp",
  storageBucket: "clientwebsitegentestapp.appspot.com",
  messagingSenderId: "1082936631105",
  appId: "1:1082936631105:web:a64740c135b3098d528bc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
export { app };