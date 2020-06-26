import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import LightTheme from './styles/theme/light';

import Routes from './routes';

function App() {
    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
}

export default App;
