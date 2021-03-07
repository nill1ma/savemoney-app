import styled, { createGlobalStyle } from 'styled-components'
import bg from '../assets/Icons-right.png'


export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;

    input[type="date"]::-webkit-datetime-edit-year-field{
      color:${props => props.theme.colors.placeholder};
      appearance: none;
    }

    input[type="date"]::-webkit-datetime-edit-month-field{
      color:${props => props.theme.colors.placeholder};
      appearance: none;
    }

    input[type="date"]::-webkit-datetime-edit-day-field{
      color:${props => props.theme.colors.placeholder};
      appearance: none;
    }
    input[type="date"]::-webkit-datetime-edit, 
    input[type="date"]::-webkit-inner-spin-button, 
    input[type="date"]::-webkit-clear-button {
      color:${props => props.theme.colors.placeholder};
    }
    ::-webkit-calendar-picker-indicator {
      filter: invert(${props => props.theme.title === 'dark' ? 1 : 0.3});
    }
  }
  body{
    font-size:14px;
    display:flex;
    background:${props => props.theme.colors.primaryColor};
    background-image:url(${bg});
    background-repeat:no-repeat;
    background-position-x:right;
  }
  button,
  a{

    font-weight:bold;
    cursor: pointer;
  }
  label{
    font-weight:bold;
  }
`

export const MainContainer = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
`