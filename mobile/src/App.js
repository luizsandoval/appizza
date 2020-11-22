import React from 'react';

import { SafeAreaView } from 'react-native';

import { connect } from 'react-redux';

import { ThemeProvider } from 'styled-components/native';

import LightTheme from './styles/themes/light';

import Routes from './routes';

const App = ({ isAuthenticated, firstAccess }) => (
    <ThemeProvider theme={LightTheme}>
        <SafeAreaView style={{ flex: 1 }}>
            <Routes 
                firstAccess={firstAccess}
                isAuthenticated={isAuthenticated}
            />
        </SafeAreaView>
    </ThemeProvider>
);

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => (
    {
        isAuthenticated,
        firstAccess: !user?.latitude,
    }
);

export default connect(mapStateToProps)(App);
