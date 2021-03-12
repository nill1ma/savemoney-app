import { LoginTextInput } from "./styles";
type SignInOrSignUp = {
    isSignIn?: boolean
    background: string
    onChangeAction: (e: any) => void
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
                        type={form.type}
                        name={form.name}
                        onChange={(e: any) => onChangeAction(e)}
                        background={background}
                        placeholder={form.placeholder}
                        key={Math.random()} />
                )
            })}
        </>
    )
}