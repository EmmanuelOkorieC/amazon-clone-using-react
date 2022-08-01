import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

  apiKey: "AIzaSyC5Niwqfb30538u9lKFg-3phI8Q1F2erM8",

  authDomain: "challenge-60cc0.firebaseapp.com",

  projectId: "challenge-60cc0",

  storageBucket: "challenge-60cc0.appspot.com",

  messagingSenderId: "305533832049",

  appId: "1:305533832049:web:acae3965917acb24d204d0",

  measurementId: "G-0QZFSYQBVG"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth}