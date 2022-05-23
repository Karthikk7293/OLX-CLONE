import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDBp1fV8m8wVurV0u8ZDO7sky_-mZVnZWQ",
    authDomain: "fir-7d020.firebaseapp.com",
    projectId: "fir-7d020",
    storageBucket: "fir-7d020.appspot.com",
    messagingSenderId: "239912515718",
    appId: "1:239912515718:web:1e16ba4e16a26845397907",
    measurementId: "G-VQ1LCE3YS6"
  };

export default firebase.initializeApp(firebaseConfig)