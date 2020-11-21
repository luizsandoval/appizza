import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/private/Home';

const Stack = createStackNavigator();

export default PublicRoutes = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            options={{
                headerShown: false
            }}
            name="Home"
            component={Home}
        />
    </Stack.Navigator>
);
