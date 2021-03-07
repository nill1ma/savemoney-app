import styled from 'styled-components'

type Button = {
    width?: string
    height?: string
    background?: string
    secondaryColor?: string
    fontSize?: string
    fontWeight?: string
    backgroundHover?: string
    secondaryColorHover?: string
    margin?: string
}
export const ButtonContainer = styled.button<Button>`
    display:flex;
    justify-content:center;
    align-items:center;
    width:${props => props.width};
    height:${props => props.height};
    background:${props => props.theme.colors.primaryColor};
    color:${props => props.theme.colors.secondaryColor};
    border:1px solid ${props => props.theme.colors.secondaryColor};
    border-radius:0.2rem;
    outline:none;
    margin:${props=>props.margin};
    font-size:${props => props.fontSize};
    font-weight:${props => props.fontWeight};
    &:hover{
        transition:background-color 1s linear;
    }
`