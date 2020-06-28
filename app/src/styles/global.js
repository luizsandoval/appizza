import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        transition: 0.3s;
    }

    html, body {
        height: 100%;
    } 

    body {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100vw;
        height: 100vh;
        background: ${({ theme }) => theme.colors.background};

        #root {
            display: flex;
            flex: 1
        }
    }

    button {
        :hover {
            cursor: pointer;
        }
    }

    a {
        text-decoration: none;
    }

    input {
        background: ${({ theme }) => theme.colors.gray.main};
        color: ${({ theme }) => theme.colors.black.main};
        padding: 16px;
        border: none;
        border-radius: 5px;
        width: 100%;
    }

`;

export default GlobalStyles;
