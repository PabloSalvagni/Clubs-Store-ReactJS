import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAJvwfcRW8XmtKUY3p-11cuxi23U5HprPs",
  authDomain: "mi-app-store.firebaseapp.com",
  projectId: "mi-app-store",
  storageBucket: "mi-app-store.appspot.com",
  messagingSenderId: "631861746890",
  appId: "1:631861746890:web:f2c9f455cc6a87c3ad2833"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

