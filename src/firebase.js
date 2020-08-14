

import firebase from "firebase"
  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCG0ZG65tjVv26a_EtuojHt7DUyk0TE_jw",
    authDomain: "instagram-clone-bb532.firebaseapp.com",
    databaseURL: "https://instagram-clone-bb532.firebaseio.com",
    projectId: "instagram-clone-bb532",
    storageBucket: "instagram-clone-bb532.appspot.com",
    messagingSenderId: "547431082824",
    appId: "1:547431082824:web:0ec983ac17b7e6473fa17d",
    measurementId: "G-WLS3RZZL18"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db,auth,storage}