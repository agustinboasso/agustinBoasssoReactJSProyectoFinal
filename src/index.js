import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRs-BjhbvFMp7cZnHPGSwROHmj_06KjPE",
  authDomain: "agustinboassoreactjscoder.firebaseapp.com",
  projectId: "agustinboassoreactjscoder",
  storageBucket: "agustinboassoreactjscoder.appspot.com",
  messagingSenderId: "16561352598",
  appId: "1:16561352598:web:b55e0ef3f917641f3137b7",
  measurementId: "G-WKRSC7NRS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

