import Config from "react-native-config";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey:Config.API_KEY ,

  authDomain:Config.AUTH_DOMAIN ,

  projectId:Config.PROJECT_ID ,

  storageBucket:Config.STORAGE_BUCKET ,

  messagingSenderId:Config.MESSAGING_SENDER_ID ,

  appId:Config.APP_ID ,

  measurementId:Config.MEASUREMENT_ID , 

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);