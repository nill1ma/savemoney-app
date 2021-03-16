import styled from 'styled-components'

export const ExpensesListContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    background:${props => props.theme.colors.primaryColor};
`

export const ExpensesGridContainer = styled.div`
    margin-left:2rem;
`