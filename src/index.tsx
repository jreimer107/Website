import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { AppRouter } from "./router";
import firebase from "firebase/app";
// import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyBMw7qbXm5QQBqQTI-4_gBJBIGAGXpiRC8",
  authDomain: "website-292501.firebaseapp.com",
  databaseURL: "https://website-292501.firebaseio.com",
  projectId: "website-292501",
  storageBucket: "website-292501.appspot.com",
  messagingSenderId: "20173478535",
  appId: "1:20173478535:web:2d8f9426707a2f67667622",
  measurementId: "G-BB0N4M29C5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
