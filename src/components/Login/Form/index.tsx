import { ChangeEvent } from "react";
import { LoginTextInput } from "./styles";
type SignInOrSignUp = {
    isSignIn?: boolean
    background: string
    onChangeAction: (e: ChangeEvent<HTMLInputElement>) => void
}
export default function Form(props: SignInOrSignUp) {
    const { background, onChangeAction, isSignIn } = props

    const formSignInOrSignUp = [
        { name: 'displayName', placeholder: 'Name', show: !isSignIn, type: 'text' },
        { name: 'email', placeholder: 'E-mail', show: true, type: 'text' },
        { name: 'password', placeholder: 'Password', show: true, type: 'password' },
    ]
    return (
        <>
            {formSignInOrSignUp.map(form => {
                return (
                    form.show &&
                    <LoginTextInput
                        key={form.name}
                        type={form.type}
                        name={form.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeAction(e)}
                        background={background}
                        placeholder={form.placeholder}/>
                )
            })}
        </>
    )
}