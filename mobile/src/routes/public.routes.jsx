import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/public/Splash';
import SignIn from '../pages/public/SignIn';
import SignUp from '../pages/public/SignUp';
import Welcome from '../pages/public/Welcome';

const Stack = createStackNavigator();

export default PublicRoutes = () => (
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
            options={{
                headerShown: false
            }}
            name="Splash"
            component={Splash}
        />
        <Stack.Screen
            options={{
                headerShown: false
            }}
            name="Welcome"
            component={Welcome}
        />
        <Stack.Screen
            options={{
                headerShown: false
            }}
            name="SignIn"
            component={SignIn}
        />
        <Stack.Screen
            options={{
                headerShown: false
            }}
            name="SignUp"
            component={SignUp}
        />
    </Stack.Navigator>
);
