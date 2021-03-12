import { createContext, useContext, useEffect, useState } from 'react'
import { firebase } from '../services/firebase_config'

interface IContext {
    user: firebase.User | null
}

export const AuthContext = createContext<IContext>({
    user: null
})

type Props = {
    children: any
}

const AuthProvider = (props: Props) => {

    const { children } = props
    const [user, setUser] = useState<firebase.User | null>(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser)
    }, [])

    return <AuthContext.Provider value={{ user }}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => {
    return useContext(AuthContext)
}

export { AuthProvider, useAuth }
