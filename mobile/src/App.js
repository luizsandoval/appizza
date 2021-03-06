import React, { useEffect } from 'react';

import { SafeAreaView } from 'react-native';

import { connect } from 'react-redux';

import { ThemeProvider } from 'styled-components/native';

import { validateAuthentication } from './store/thunks/auth';

import LightTheme from './styles/themes/light';

import SplashScreen from './pages/public/Splash';

import Routes from './routes';

const App = (
    { 
        isAuthenticated,
        validatingAuthentication, 
        validateUserAuthentication, 
    }
) => {
    useEffect(() => {
        validateUserAuthentication();
    }, [validateUserAuthentication]);

    return (
        <ThemeProvider theme={LightTheme}>
            <SafeAreaView style={{ flex: 1 }}>
                {
                    validatingAuthentication
                        ? (
                            <SplashScreen />
                        )
                        : (
                            <Routes 
                                isAuthenticated={isAuthenticated}
                            />
                        )
                }
            </SafeAreaView>
        </ThemeProvider>
    );
}

const mapDispatchToProps = dispatch => (
    {
        validateUserAuthentication: () => dispatch(validateAuthentication()),
    }
);

const mapStateToProps = (
    { 
        auth: { 
            isAuthenticated,
            validatingAuthentication,
        } 
    }
) => (
    {
        isAuthenticated,
        validatingAuthentication,
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
