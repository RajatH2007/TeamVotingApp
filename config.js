import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDSILOnFfmr1bRGPbPhqISonFs0hyejomE",
    authDomain: "voting-app-e93fc.firebaseapp.com",
    databaseURL: "https://voting-app-e93fc-default-rtdb.firebaseio.com",
    projectId: "voting-app-e93fc",
    storageBucket: "voting-app-e93fc.appspot.com",
    messagingSenderId: "143823142339",
    appId: "1:143823142339:web:0180f62d1936cbe2fe5176"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();