import styled from 'styled-components'
import darkLogo from '../../assets/dark-logo.png'
import lightkLogo from '../../assets/light-logo.png'
import bgLoginDark from '../../assets/Icons.png'
import bgLoginLight from '../../assets/light-icons.png'
import { ThemeTypesEnum } from '../../models/themeEnum'

type Login = {
    background?: string
    isLogin?: boolean
    image?: string
}

export const LoginContainer = styled.div<Login>`
    display:flex;
    flex-direction:column;
    width:100vw;
    height:100vh;
    background:${props => props.theme.colors.primaryColor};
    background-image:url(${props=>props.theme.title === ThemeTypesEnum.DARK ? bgLoginDark : bgLoginLight});
    background-repeat:no-repeat;
`

export const LogoArea = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    width:39.25rem;
    height:60vh;
`
export const Logo = styled.img.attrs(props => ({
    src: props.theme.title === ThemeTypesEnum.DARK ? darkLogo : lightkLogo
}))`

    width: 21.125rem;
    height: 3rem;
    margin-bottom:5rem;
`
export const LogoAndFormContainer = styled.div`
    display:flex;
    justify-content:space-around;
    width:100vw;
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
    background:${props => props.isLogin ? props.theme.colors.secondaryColor : props.theme.colors.primaryColor};
    opacity:0.6;
`

export const Text = styled.span<Login>`
color:${props => props.isLogin ? props.theme.colors.primaryColor : props.theme.colors.secondaryColor};
opacity:1;
`

export const ThemeArea = styled.div`
    align-self:flex-end;
    bottom:0;
    position:absolute;
    height:6rem;
`
