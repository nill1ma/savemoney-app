import { createContext } from 'react'

interface Toggle{
    handleTheme:(type?:string)=>void
}

const ToggleContext = createContext({} as Toggle)

export { ToggleContext }