import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import Form from "./Form";
import { LoginContainer, LoginChooseSignInOrSignUp, LoginChooseSignInOrSignUpItem, FormArea, Logo, LogoArea } from "./styles";

import logo from '../../assets/Logo.png'
import { Button } from "../protected-pages/shared/Button";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true)

    const [signInOrSignOut, setSignInOrSignOut] = useState([
        { label: 'LOG IN', value: true, isLogin: true },
        { label: 'SIGN UP', value: false, isLogin: false }
    ])

    const handleIsLogin = (label: string) => {
        signInOrSignOut.forEach(siso => {
            siso.label === label ? siso.isLogin = true : siso.isLogin = false
        })

        setSignInOrSignOut(signInOrSignOut)
        var result = signInOrSignOut.find(siso => siso.isLogin)
        if(result) setIsLogin(result.value)
    }

    return (
        <>
            <LoginContainer>
                <LogoArea>
                    <Logo
                        src={logo}
                    />
                </LogoArea>
                <FormArea>
                    <LoginChooseSignInOrSignUp>
                        {signInOrSignOut.map(siso => {
                            return (
                                <LoginChooseSignInOrSignUpItem
                                    key={siso.label}
                                    isLogin={siso.isLogin}
                                    onClick={() => { handleIsLogin(siso.label) }}>
                                    {siso.label}
                                </LoginChooseSignInOrSignUpItem>
                            )
                        })}
                    </LoginChooseSignInOrSignUp>
                    <Form background={'rgba(255,255,255,0.6)'} isSignIn={isLogin} />
                    <Button
                        background={'#085373'}
                        fontSize={'0.875rem'}
                        fontWeight={'bold'}
                        margin={'2.5rem 0 0 0'}
                        width={'10.438rem'}>ENTER</Button>
                </FormArea>
            </LoginContainer>
        </>
    )
}