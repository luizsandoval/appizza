import React, { useEffect } from 'react';

import { SafeAreaView } from 'react-native';

import { connect } from 'react-redux';

import { ThemeProvider } from 'styled-components/native';

import { isValid as isTokenValid } from './services/token.service';

import { signOut } from './store/actions/auth';

import LightTheme from './styles/themes/light';

import Routes from './routes';

const App = ({ onSignOut, isAuthenticated, firstAccess }) => {

    useEffect(() => {
        async function validateAuthentication() {
            if (
                !(await isTokenValid())
                && isAuthenticated
            ) {
                onSignOut();
            }
        };

        validateAuthentication();
    }, []);

    return (
        <ThemeProvider theme={LightTheme}>
            <SafeAreaView style={{ flex: 1 }}>
                <Routes 
                    firstAccess={firstAccess}
                    isAuthenticated={isAuthenticated}
                />
            </SafeAreaView>
        </ThemeProvider>
    );
};

const mapDispatchToProps = dispatch => (
    {
        onSignOut: () => dispatch(signOut()),
    }
);

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => (
    {
        isAuthenticated,
        firstAccess: !user?.latitude,
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
