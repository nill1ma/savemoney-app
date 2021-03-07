import styled from 'styled-components'

type Grid = {
    background?:string
    secondaryColor?:string
    backgroundHover?:string
    secondaryColorHover?:string
}

export const GridContainer = styled.div``
export const GridHeader = styled.div<Grid>``
export const GridItem = styled.div<Grid>``
