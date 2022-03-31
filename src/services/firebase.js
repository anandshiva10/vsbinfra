import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCusf-Bi4E5cl5ZPGQYZQGGkGm9FLWdye4",
    authDomain: "vsbinfra-33aee.firebaseapp.com",
    projectId: "vsbinfra-33aee",
    storageBucket: "vsbinfra-33aee.appspot.com",
    messagingSenderId: "201332120095",
    appId: "1:201332120095:web:8eed051885253f9477132a"
  }

  firebase.initializeApp(firebaseConfig)  

  export const auth=firebase.auth()
  export const db=firebase.firestore()

  export default firebase;