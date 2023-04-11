import { initializeApp, getApps, getApp } from "firebase/app";
import "firebase/firestore";

// configs go here
const firebaseConfig = {
    apiKey: "AIzaSyDKBguux8R06-YH8hKoXRjSVXTEr45YXrg",
    authDomain: "web-wizards-pebble.firebaseapp.com",
    projectId: "web-wizards-pebble",
    storageBucket: "web-wizards-pebble.appspot.com",
    messagingSenderId: "95863207934",
    appId: "1:95863207934:web:e4ffd5d5e8a490d0cab2af",
};

// Initialize Firebase if it hasn't been initialized yet
const app = getApps()?.length ? getApp() : initializeApp(firebaseConfig);

export default app;
