import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import LightTheme from './styles/theme/light';

function App() {
    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyles />
            <div className="App">
                <h1>Hello world</h1>
            </div>
        </ThemeProvider>
    );
}

export default App;
