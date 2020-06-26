import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { ProtectedRoute } from './protected.route';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Home = lazy(() => import('./pages/private/Home'));

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<label>Carregando...</label>}>
            <Switch>
                <Route path="/signIn" render={() => <SignIn /> }/>
                <Route path="/signUp" render={() => <SignUp /> }/>
                <ProtectedRoute path="/home" component={Home} />
            </Switch>
        </Suspense>
        <ToastContainer />
    </BrowserRouter>
);

export default Routes;
