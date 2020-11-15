import React from 'react';

import { SafeAreaView } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import LightTheme from './styles/themes/light';

import Routes from './routes';

const App = () => (
    <ThemeProvider theme={LightTheme}>
        <SafeAreaView style={{ flex: 1 }}>
            <Routes />
        </SafeAreaView>
    </ThemeProvider>
);

export default App;
