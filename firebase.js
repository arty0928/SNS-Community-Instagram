// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI5m2ODKR0dwo-1ZuzULMI84UoqpfG_-E",
  authDomain: "instagram-fcc31.firebaseapp.com",
  projectId: "instagram-fcc31",
  storageBucket: "instagram-fcc31.appspot.com",
  messagingSenderId: "227919580465",
  appId: "1:227919580465:web:a4dbf4f84cd87b59dff410"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
