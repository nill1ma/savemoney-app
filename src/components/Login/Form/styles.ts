import styled from 'styled-components'

type Input = {
    background?: string
    visibility?: boolean
    type?:string
}

export const LoginTextInput = styled.input.attrs(props=>({type:props.type}))<Input>`
    outline:none;
    border: none;
    border-bottom:1px solid ${props => props.theme.colors.secondaryColor};
    background:${props => props.theme.colors.primaryColor};
    color:${props=>props.theme.colors.secondaryColor};
    width:100%;
    height:2.75rem;
    margin-top:1.5rem;
    transition:all 10s linear;
    ::placeholder{
        color:${props => props.theme.colors.secondaryColor};
        opacity: 0.9;
    }
    
`