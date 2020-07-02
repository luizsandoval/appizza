import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isLoginValid, signOut } from './services/users.service';

import Layout from './pages/Layout';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isLoginValid()) {
                    return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    );
                } else {
                    signOut();

                    return (
                        <Redirect
                            to={{
                                pathname: '/signIn',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};
