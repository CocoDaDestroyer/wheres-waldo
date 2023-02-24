
import './App.css';
import React, {useState,useEffect} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Bottom from './Components/Bottom';
import Header from './Components/Header';
import Game from './Components/Game';
firebase.initializeApp({  
  apiKey: "AIzaSyAd4RhIOeq3js774mj4TqgPbR02htk_t8A",
  authDomain: "where-s-waldo-ace23.firebaseapp.com",
  projectId: "where-s-waldo-ace23",
  storageBucket: "where-s-waldo-ace23.appspot.com",
  messagingSenderId: "375402523254",
  appId: "1:375402523254:web:525b0f7156bee832500d57"})
const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Game/>
      <Bottom/>
  
    </div>
  );
}

export default App;
