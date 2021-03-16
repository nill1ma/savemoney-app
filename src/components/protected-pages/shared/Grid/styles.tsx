import styled, { DefaultTheme } from 'styled-components'

type Grid = {
    background?: string
    secondaryColor?: string
    backgroundHover?: string
    secondaryColorHover?: string
    lengthOfObjects?: number
}
export const GridContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`
export const GridHeaderItem = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    height:5em;
    border:1px solid ${props => props.theme.colors.secondaryColor};
    background:${props => isLightTheme(props.theme) ? props.theme.colors.secondaryColor : props.theme.colors.primaryColor};
    color:${props => isLightTheme(props.theme) ? props.theme.colors.primaryColor : props.theme.colors.secondaryColor};
`
export const GridItemBox = styled.div<Grid>`
    width:100%;
    display:flex;
    align-items:center;
    height:5em;
`
export const GridItemText = styled.strong<Grid>`
    display:flex;
    text-transform: capitalize;
    justify-content:center;
    width:${props => (100 / props.lengthOfObjects!)}%;
`
export const GridItemsContainer = styled.div`
    width:90%;
    display:flex;
    flex-direction:column;
    ${GridItemBox}:nth-child(odd){
        color:${props => props.theme.colors.primaryColor};
        background:${props => props.theme.colors.secondaryColor};
        opacity:0.7;
    }
    ${GridItemBox}:nth-child(even){
        color:${props => props.theme.colors.secondaryColor};
    }
`
const isLightTheme = (theme: DefaultTheme) => {
    return theme.title === 'light'
}