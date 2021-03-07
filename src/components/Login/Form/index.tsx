import { LoginTextInput } from "./styles";

export default function Form(props: any) {
    const { isSignIn, background } = props
    const formSignInOrSignUp = [
        { id: 'name', placeholder: 'Name', show: !isSignIn },
        { id: 'email', placeholder: 'E-mail', show: true },
        { id: 'password', placeholder: 'Password', show: true }
    ]
    return (
        <>
            {formSignInOrSignUp.map(form => {
                return (
                    form.show &&
                    <LoginTextInput background={background} placeholder={form.placeholder} key={Math.random()} />
                )
            })}
        </>
    )
}