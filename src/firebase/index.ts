import firebase from 'firebase'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAsysz_cuk0xO-blLFQiVVOYKd3Q3pIS9U",
    authDomain: "savemoney-26ab6.firebaseapp.com",
    projectId: "savemoney-26ab6",
    storageBucket: "savemoney-26ab6.appspot.com",
    messagingSenderId: "7726272751",
    appId: "1:7726272751:web:5694455650ed26f0a98b1a"
};

var fireDb = firebase.initializeApp(firebaseConfig)

export default fireDb.database().ref()