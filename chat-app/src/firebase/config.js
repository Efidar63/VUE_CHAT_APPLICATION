import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Import getAuth from firebase/auth
import { FieldValue } from 'firebase/firestore'; // Import FieldValue from firebase/firestore


const firebaseConfig = {
  apiKey: "AIzaSyBi2ySpgM1leZAcJ3RUTUQY15m438e3uQ8",
  authDomain: "blog-vue3-439d9.firebaseapp.com",
  projectId: "blog-vue3-439d9",
  storageBucket: "blog-vue3-439d9.appspot.com",
  messagingSenderId: "742386752632",
  appId: "1:742386752632:web:dee90881aecdfee2f2e18d"
};
const app = initializeApp(firebaseConfig);

const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app);
const timestamp = FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };