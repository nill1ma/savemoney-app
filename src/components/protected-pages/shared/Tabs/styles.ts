import { Link } from 'react-router-dom'
import styled from 'styled-components'

type TabsProps = {
    active?: boolean
}

export const TabsContainer = styled.div`
    display:flex;
    align-items:flex-end;
    padding-left:2rem;
    width:100%;
    margin:1rem 0;
`
export const TabsItems = styled(Link)<TabsProps>`
    display:flex;
    justify-content:center;
    padding: 1rem 2rem;
    text-decoration:none;
    align-items:center;
    color:${props => props.theme.colors.secondaryColor};
    ${({ active, theme }) => active && `
        background:${theme.colors.secondaryColor};
        color:${theme.colors.primaryColor};
        opacity:0.6;
    `}
`