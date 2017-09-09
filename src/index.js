import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBf-eLykJYGmUtAG8_YGx3bzX3Djmw5_ME",
  authDomain: "snaptrack-f1851.firebaseapp.com",
  databaseURL: "https://snaptrack-f1851.firebaseio.com",
  projectId: "snaptrack-f1851",
  storageBucket: "",
  messagingSenderId: "40575916475"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
