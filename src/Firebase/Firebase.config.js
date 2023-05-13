// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnPH87L8aTDSGa4SU5PurOkXei6mQhc1Y",
  authDomain: "car-service-136c3.firebaseapp.com",
  projectId: "car-service-136c3",
  storageBucket: "car-service-136c3.appspot.com",
  messagingSenderId: "621854322615",
  appId: "1:621854322615:web:5818586c82cff136be0232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;