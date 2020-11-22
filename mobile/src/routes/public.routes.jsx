import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/public/SignIn';
import SignUp from '../pages/public/SignUp';
import Welcome from '../pages/public/Welcome';

const { Navigator, Screen } = createStackNavigator();

export default PublicRoutes = () => (
    <Navigator 
        initialRouteName="Welcome" 
        screenOptions={
            { 
                headerShown: false 
            }
        }
    >
        <Screen
            name="Welcome"
            component={Welcome}
        />
        <Screen
            name="SignIn"
            component={SignIn}
        />
        <Screen
            name="SignUp"
            component={SignUp}
        />
    </Navigator>
);
