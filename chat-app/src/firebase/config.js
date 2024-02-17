import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // for authentication
import { getFirestore } from 'firebase/firestore'; // for Firestore



const firebaseConfig = {
    apiKey: "AIzaSyBi2ySpgM1leZAcJ3RUTUQY15m438e3uQ8",
    authDomain: "blog-vue3-439d9.firebaseapp.com",
    projectId: "blog-vue3-439d9",
    storageBucket: "blog-vue3-439d9.appspot.com",
    messagingSenderId: "742386752632",
    appId: "1:742386752632:web:dee90881aecdfee2f2e18d"
  };

  
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };