import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCw0qJirfOWRqvGktULgSrHfHM_XsW4Gdo",
    authDomain: "recycle-me-f052b.firebaseapp.com",
    projectId: "recycle-me-f052b",
    storageBucket: "recycle-me-f052b.appspot.com",
    messagingSenderId: "973407190785",
    appId: "1:973407190785:web:d465dd9902c5aab4c5e500"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase;