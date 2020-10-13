import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { getEstablishment } from './services/establishments.service';

import GlobalStyles from './styles/global';
import LightTheme from './styles/theme/light';

import Routes from './routes';

import AppContext from './AppContext';

function App() {
    const [user, setUser] = useState(getEstablishment());
    const [selectedPizzas, setSelectedPizzas] = useState([]);
    const [expandedPizza, setExpandedPizza] = useState('');
    const [openedComponent, setOpenedComponent] = useState('');

    return (
        <AppContext.Provider 
            value={
                { 
                    user, 
                    selectedPizzas, 
                    expandedPizza, 
                    openedComponent, 
                    setUser, 
                    setSelectedPizzas, 
                    setExpandedPizza, 
                    setOpenedComponent, 
                }
            }>
            <ThemeProvider theme={LightTheme}>
                <GlobalStyles />
                <Routes />
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
