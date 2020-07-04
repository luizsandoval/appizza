import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { getUser } from './services/users.service';

import GlobalStyles from './styles/global';
import LightTheme from './styles/theme/light';

import Routes from './routes';

import AppContext from './AppContext';

function App() {
    const [user, setUser] = useState(getUser());
    const [selectedPizzas, setSelectedPizzas] = useState([]);

    return (
        <AppContext.Provider value={{ user, selectedPizzas, setUser, setSelectedPizzas }}>
            <ThemeProvider theme={LightTheme}>
                <GlobalStyles />
                <Routes />
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
