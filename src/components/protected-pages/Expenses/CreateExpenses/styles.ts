import styled from 'styled-components'

type Field = {
    width:any
    margin:any
}

export const ExpensesContainer = styled.div`
    display:flex;
    width:100%;
    background:${props => props.theme.colors.primaryColor}
`
export const FieldArea = styled.div<Field>`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:${props=>props.width};
    margin:${props=>props.margin};
`
export const ExpensesFormArea = styled.div`
    display:flex;
    flex-wrap:wrap;
    height:60%;
    width:47.688rem;
`
export const ButtonsAreaContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:10.813rem;
    margin:2rem 0 0 5%;
    height:7rem;
`