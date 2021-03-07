import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import logo from '../../../assets/small-logo.png'

type SideBar = {
    background?: string
    secondaryColor?: string
    backgroundHover?: string
    secondaryColorHover?: string
    active?:boolean
}

export const SideBarContainer = styled.div<SideBar>`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    border-right:1px solid ${props => props.theme.colors.secondaryColor};
    align-items:center;
    width:8.563rem;
    height:100vh;
    background:${props => props.theme.colors.primaryColor};
`
export const SideBarLogo = styled.img.attrs({ src: logo })``

export const SideBarItems = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    height:20rem;
`

export const MenuLink = styled(Link)``

export const MenuIcon = styled(FontAwesomeIcon)<SideBar>`
    color:${props => props.active ? props.theme.colors.secondaryColor : props.theme.colors.iconColor};
    cursor: pointer;
`