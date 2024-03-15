

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';




// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7Cd364Ff_sy3L2gb3RSIuaAlX8UJ7LXc",
    authDomain: "fir-acfc0.firebaseapp.com",
    projectId: "fir-acfc0",
    storageBucket: "fir-acfc0.appspot.com",
    messagingSenderId: "20117063013",
    appId: "1:20117063013:web:32c6de111a1ca4285acd8c",
    measurementId: "G-6LV9664BFB"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

// Export the initialized Firebase app for other parts of your application to use
export default Firebase;
