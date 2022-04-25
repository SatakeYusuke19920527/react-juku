import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCnvIVhcgokP4ORivbD2xPpSz3VqXYw7l0",
    authDomain: "react-juku-keisuke-watanabe.firebaseapp.com",
    projectId: "react-juku-keisuke-watanabe",
    storageBucket: "react-juku-keisuke-watanabe.appspot.com",
    messagingSenderId: "872547772177",
    appId: "1:872547772177:web:a9011e266643326ec84eb0",
    measurementId: "G-S2CB9JZTQM",
  };

initializeApp(firebaseConfig);
export const auth = getAuth();