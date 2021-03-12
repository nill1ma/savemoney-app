import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const fireConfig = ({
    apiKey: "AIzaSyAsysz_cuk0xO-blLFQiVVOYKd3Q3pIS9U",
    authDomain: "savemoney-26ab6.firebaseapp.com",
    projectId: "savemoney-26ab6",
    storageBucket: "savemoney-26ab6.appspot.com",
    messagingSenderId: "7726272751",
    appId: "1:7726272751:web:5694455650ed26f0a98b1a"
})

function initFireBase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(fireConfig)
    }
}

initFireBase()

export { firebase }


//https://www.youtube.com/watch?v=c3pUMcMSn-w