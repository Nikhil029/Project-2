import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCpWY677MehNTpU_uqbh0128Ivj12mQ0Vg",
    authDomain: "project-2-ecommerce-app.firebaseapp.com",
    projectId: "project-2-ecommerce-app",
    storageBucket: "project-2-ecommerce-app.appspot.com",
    messagingSenderId: "1096729632991",
    appId: "1:1096729632991:web:925b9dc9012ce79016496a",
    measurementId: "G-WX87Z7SWQV"
  };
  
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}