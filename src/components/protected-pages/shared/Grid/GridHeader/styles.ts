import styled from 'styled-components'

export const Header = styled.div`
    display:flex;
    width:80%;
    background:${props => props.theme.colors.secondaryColor}
`
export const Item = styled.div`
    color:'#FFFFFF';
    span{
        font-size:2rem;    }
`