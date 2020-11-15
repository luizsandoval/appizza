import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/public/Splash';
import SignIn from '../pages/public/SignIn';
import SignUp from '../pages/public/SignUp';
import Welcome from '../pages/public/Welcome';

const Stack = createStackNavigator();

export default PrivateRoutes = () => (
    <Stack.Navigator 
        initialRouteName="Welcome" 
        screenOptions={
            { 
                headerShown: false 
            }
        }
    >
        <Stack.Screen
            name="Splash"
            component={Splash}
        />
        <Stack.Screen
            name="Welcome"
            component={Welcome}
        />
        <Stack.Screen
            name="SignIn"
            component={SignIn}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUp}
        />
    </Stack.Navigator>
);
