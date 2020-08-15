import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDnrai8J1tbAaPF236TgZvG8EtdwIi1oqg",
    authDomain: "duan1-36be2.firebaseapp.com",
    databaseURL: "https://duan1-36be2.firebaseio.com",
    projectId: "duan1-36be2",
    storageBucket: "duan1-36be2.appspot.com",
    messagingSenderId: "904049973029",
    appId: "1:904049973029:web:5875370efb1916e5602ccc"
 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase