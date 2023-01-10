import { createGlobalStyle } from 'styled-components'

 export const GlobalStyle = createGlobalStyle`

    :focus{
        outline: transparent;
        box-shadow: 0 0 0 2px #00875f;
    }

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background:#121214;
        color: #c4c4cc;
        -webkit-font-smoothing:antialiased;
    }

    body,input,texarea,button,time{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`