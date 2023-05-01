import firebase from 'firebase'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBL9wXW4VXAU3Z4SBCwKSV-ps8dfJCAkd4",
  authDomain: "cooking-project-77d9f.firebaseapp.com",
  projectId: "cooking-project-77d9f",
  storageBucket: "cooking-project-77d9f.appspot.com",
  messagingSenderId: "56060372150",
  appId: "1:56060372150:web:d4b336fd7693597f1fb217",
  measurementId: "G-W48HYRC77K"
};


firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore()

export { projectFireStore };