import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTxQ9gDY3Iq2TNcj88sFa8L1KucNgrAbs",
    authDomain: "enpie-6bf93.firebaseapp.com",
    projectId: "enpie-6bf93",
    storageBucket: "enpie-6bf93.appspot.com",
    messagingSenderId: "998414671827",
    appId: "1:998414671827:web:763ba5920df3ed89939926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);