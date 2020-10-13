import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

  :root{
    --primary-color: #FF8822,
  }
  
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  html{
    font-size: 62.5%;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    position: relative;
  }

  body, input, button{
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
  }
`