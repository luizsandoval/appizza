import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
    }

    body {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100vw;
        height: 100vh;
    }

`;

export default GlobalStyles;
