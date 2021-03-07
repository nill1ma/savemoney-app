import styled from 'styled-components'

type Input = {
    background?: string
    visibility?:boolean
}

export const LoginTextInput = styled.input<Input>`
    outline:none;
    border: none;
    border-bottom:1px solid #FFFFFF;
    background:#085373;
    color:#FFFFFF;
    width:100%;
    height:44px;
    margin-top:1.5rem;
    transition:all 10s linear;
    ::placeholder{
        color:rgba(255,255,255,0.5);
    }
    
`