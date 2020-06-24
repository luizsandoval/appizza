import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<label>Carregando...</label>}>
            <Switch>
                <Route path="signIn" render={() => <SignIn /> }/>
                <Route path="signUp" render={() => <SignUp /> }/>
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default Routes;
