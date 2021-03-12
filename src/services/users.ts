import { firebase } from './firebase_config'

const createUser = async (email: string, password: string) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        
    } catch (error) {
        console.error(`${error.code} ${error.message}`)
    }
}


const authenticator = async (email: string, password: string) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        console.error(`${error.code} ${error.message}`)
    }
}

const logOut = async () => {
    try {
        await firebase.auth().signOut()
    } catch (error) {
        console.error(`${error.code} ${error.message}`)
    }
}

export {
    createUser,
    authenticator,
    logOut
}