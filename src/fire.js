import firebase from 'firebase'

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
   apiKey: "AIzaSyAqFW5FJWocZcE6JlnydsgNL5ZakfuAD7M",
   authDomain: "next-f2cee.firebaseapp.com",
   databaseURL: "https://next-f2cee.firebaseio.com",
   projectId: "next-f2cee",
   storageBucket: "next-f2cee.appspot.com",
   messagingSenderId: "860917272828"
};
var fire = firebase.initializeApp(config);

export const fireAuth = fire.auth();

export const fireDB = fire.database();

export default fire;
