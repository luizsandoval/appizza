import { createGlobalStyle } from 'styled-components';

import { rgba } from 'polished';

import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        transition: 0.3s;
    
        &:focus {
            outline: 0;
        }
    }

    html, body {
        height: 100%;
    } 

    body {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        height: 100vh;
        background: ${({ theme }) => theme.colors.background};

        #root {
            display: flex;
            flex: 1
        }
    }

    button, a {
        :hover {
            cursor: pointer;
        }
    }

    a {
        text-decoration: none;
    }

    input, textarea {
        background: ${({ theme }) => theme.colors.gray.main};
        color: ${({ theme }) => theme.colors.black.main};
        padding: 16px;
        border: none;
        border-radius: 5px;
        width: 100%;

        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
        outline: none;
    }

    input:focus, textarea:focus {
        box-shadow: 0 0 5px ${({ theme }) => rgba(theme.colors.secondary.light, 1)};
        border: 1px solid ${({ theme }) => rgba(theme.colors.secondary.light, 1)};
    }

    h1 {
        font-size: 2em;
    }
`;

export default GlobalStyles;
