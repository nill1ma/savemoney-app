import styled from 'styled-components'
import logo from '../../assets/Icons.png'

type Login = {
    background?: string
    isLogin?: boolean
    image?: string
}

export const LoginContainer = styled.div<Login>`
    display:flex;
    justify-content:space-around;
    display:flex;
    width:100vw;
    height:100vh;
    background:#085373;
    background-image:url(${logo});
    background-repeat:no-repeat;
`

export const LogoArea = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:39.25rem;
`
export const Logo = styled.img.attrs({ src: logo })`
    width: 21.125rem;
    height: 3rem;
    margin-bottom:5rem;
`

export const FormArea = styled.div`
    width:21.125rem;
    display:flex;
    flex-direction:column;
    margin-top:5rem;
`
export const LoginChooseSignInOrSignUp = styled.div<Login>`
    display:flex;
    justify-content:space-between;
`
export const LoginChooseSignInOrSignUpItem = styled.button<Login>`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    outline:none;
    font-family: 'Roboto', sans-serif;
    padding:1rem 0;
    font-weight:bold;
    color:#FFFFFF;
    background:${props => props.isLogin ? 'rgba(255,255,255,0.5)' : 'none'}
    
`
