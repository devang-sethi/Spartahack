// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3Khv6qfEjXUoDD519rxX3MWKm1hfKyo4",
    authDomain: "spartan-connect-a1b23.firebaseapp.com",
    projectId: "spartan-connect-a1b23",
    storageBucket: "spartan-connect-a1b23.appspot.com",
    messagingSenderId: "279056032272",
    appId: "1:279056032272:web:2c71f2b4aa617c4a926095",
    measurementId: "G-KTMDLK9BJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//pass auth, email, and password from html
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });


//When a user signs in to your app, pass the user's email address and password to signInWithEmailAndPassword:
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });


//After a user signs in for the first time,

const auth = getAuth();
signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});



//DataBase
//You can find your Realtime Database URL in the Realtime Database section of the Firebase console. Depending on the location of the database, the database URL will be in one of the following forms:
//
// https://DATABASE_NAME.firebaseio.com (for databases in us-central1)
// https://DATABASE_NAME.REGION.firebasedatabase.app (for databases in all other locations)
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://spartan-connect-a1b23-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);