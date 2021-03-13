import { ChangeEvent, useState } from "react";
import { Redirect } from "react-router";
import { useAuth } from "../../contexts/auth";
import { createUser, authenticator } from "../../services/users";
import { Button } from "../protected-pages/shared/Button";
import { FormArea, LoginChooseSignInOrSignUp, LoginChooseSignInOrSignUpItem, Text, LoginContainer, LogoAndFormContainer, Logo, LogoArea, ThemeArea } from "./styles";
import Theme from "../protected-pages/shared/Theme";
import Form from "./Form";

type User = {
    email: string
    password: string
}

export default function Login() {

    const { user: currentUSer } = useAuth()

    const [user, setUser] = useState<User>({
        email: '',
        password: ''
    })

    const [isLogin, setIsLogin] = useState(true)

    const [signInOrSignUp, setSignInOrSignUp] = useState([
        { label: 'LOG IN', value: true, isLogin: true },
        { label: 'SIGN UP', value: false, isLogin: false }
    ])

    const handleIsLogin = (label: string) => {
        'SIGN UP' === label ? setIsLogin(true) : setIsLogin(false)
        signInOrSignUp.forEach(siso => {
            siso.label === label ? siso.isLogin = true : siso.isLogin = false
        })

        setSignInOrSignUp([...signInOrSignUp])
        var result = signInOrSignUp.find(siso => siso.isLogin)
        if (result) setIsLogin(result.value)
    }

    const handleSetUser = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
}

const handleCreateUserOrSignIn = async () => {
    const { email, password } = user
    !isLogin ? await createUser(email, password) : await authenticator(email, password)
}

if (currentUSer) {
    return <Redirect to={'/create-expenses'} />
}

return (
    <>
        <LoginContainer>
            <LogoAndFormContainer>
                <LogoArea>
                    <Logo />
                </LogoArea>
                <FormArea>
                    <LoginChooseSignInOrSignUp>
                        {signInOrSignUp.map(sisu => {
                            return (
                                <LoginChooseSignInOrSignUpItem
                                    key={sisu.label}
                                    isLogin={sisu.isLogin}
                                    onClick={() => { handleIsLogin(sisu.label) }}>
                                    <Text isLogin={sisu.isLogin}>
                                        {sisu.label}
                                    </Text>
                                </LoginChooseSignInOrSignUpItem>
                            )
                        })}
                    </LoginChooseSignInOrSignUp>
                    <Form
                        isSignIn={isLogin}
                        onChangeAction={(e: ChangeEvent<HTMLInputElement>) => handleSetUser(e)}
                        background={'rgba(255,255,255,0.6)'}
                    />
                    <Button
                        onClickAction={handleCreateUserOrSignIn}
                        background={'#085373'}
                        fontSize={'0.875rem'}
                        fontWeight={'bold'}
                        margin={'2.5rem 0 0 0'}
                        width={'10.438rem'}
                        buttonType={'button'}
                        height={'3.75rem'}>ENTER</Button>
                    <ThemeArea>
                        <Theme />
                    </ThemeArea>
                </FormArea>
            </LogoAndFormContainer>
        </LoginContainer>
    </>
)
}