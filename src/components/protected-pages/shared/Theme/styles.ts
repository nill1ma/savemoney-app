import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ThemeAreaContainer = styled.div`
    width:2rem;
    height:3.8rem;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    background:${props => props.theme.colors.iconColor};
    opacity:1;
    border-radius:1rem;
`
export const IconBorder = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:1.6rem;
    height:1.6rem;
    background:${props => props.title === props.theme.title ? props.theme.colors.primaryColor : props.theme.colors.iconColor};
    border-radius:50%;
    cursor: pointer;
`

export const Icon = styled(FontAwesomeIcon)`
    color:${props => props.title === props.theme.title ? props.theme.colors.secondaryColor : props.theme.colors.primaryColor};
    opacity: ${props => props.title === props.theme.title ? 1 : 0.5};
    cursor: pointer;
`

