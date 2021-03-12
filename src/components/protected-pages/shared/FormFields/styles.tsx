import styled from 'styled-components'
import { Field } from 'formik'

type TextInput = {
    background?: string
    secondaryColor?: string
    backgroundHover?: string
    secondaryColorHover?: string
}

export const InputLabel = styled.label`
    color:${props => props.theme.colors.secondaryColor};
`

export const TextInputElement = styled(Field)<TextInput>`
    outline:none;
    border: none;
    border-bottom:1px solid ${props => props.theme.colors.secondaryColor};
    background:${props => props.theme.colors.primaryColor};
    color:${props => props.theme.colors.secondaryColor};
    width:100%;
    height:44px;
    ::placeholder{
        color:${props => props.theme.colors.placeholder};
    }
`