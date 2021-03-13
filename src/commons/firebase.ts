import { firebase } from '../services/firebase_config'

export const get = async () => {

}
export const save = async (ref:string,values: any, uid: string) => {
    const db = await firebase.database().ref(`${ref}`).push()
    db.set({ ...values, userId: uid })
}