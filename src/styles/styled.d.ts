import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primaryColor:string
            secondaryColor:string
            iconColor: string,
            placeholder: string
        }
    }
}