import { firebase } from '../services/firebase_config'

export function get<T>(ref: string, uid?: string, orderBy?: string): T[] {
    try {
        var dataList: T[] = []
        const reference = firebase.database()
        reference.ref(ref).on('value', (snapshot: any) => {
            const data = snapshot.val()
            for (let id in data) {
                delete data[id].userId
                dataList.push(data[id])
            }
        })
        return dataList
    } catch (error) {
        throw new Error(error.message)
    }
}
export const save = async (ref: string, values: any, uid: string) => {
    const db = await firebase.database().ref(`${ref}`).push()
    db.set({ ...values, userId: uid })
}