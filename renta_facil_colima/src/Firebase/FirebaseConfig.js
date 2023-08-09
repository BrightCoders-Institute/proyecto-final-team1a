// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCXjC484Gu_Lgup-P8w2jcAgbCL6vjIwp0",

  authDomain: "rentafacil-679ab.firebaseapp.com",

  projectId: "rentafacil-679ab",

  storageBucket: "rentafacil-679ab.appspot.com",

  messagingSenderId: "1025640860054",

  appId: "1:1025640860054:web:53d479afd2c5bd69b1b5b7",

  measurementId: "G-5JZDH70PWX"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);