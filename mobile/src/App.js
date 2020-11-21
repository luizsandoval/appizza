import React from 'react';

import { Provider } from 'react-redux';

import { SafeAreaView } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import LightTheme from './styles/themes/light';

import Routes from './routes';

import store from './store';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={LightTheme}>
            <SafeAreaView style={{ flex: 1 }}>
                <Routes />
            </SafeAreaView>
        </ThemeProvider>
    </Provider>
);

export default App;
