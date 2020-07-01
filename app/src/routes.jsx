import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { ProtectedRoute } from './protected.route';

import Spinner from './components/Spinner';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Home = lazy(() => import('./pages/private/Home'));
const Order = lazy(() => import('./pages/private/Order'));

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route path="/signIn" render={() => <SignIn /> }/>
                <Route path="/signUp" render={() => <SignUp /> }/>
                <ProtectedRoute 
                    path="/" 
                    exact
                    component={Home}
                />
                <ProtectedRoute 
                    path="/order"
                    component={Order}
                />
            </Switch>
        </Suspense>
        <ToastContainer />
    </BrowserRouter>
);

export default Routes;
