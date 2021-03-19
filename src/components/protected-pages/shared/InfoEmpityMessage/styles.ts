import styled from 'styled-components'

export const InfoEmpityMessageContainer = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const InfoEmpityMessageText = styled.strong`
    color:${props => props.theme.colors.secondaryColor}
`