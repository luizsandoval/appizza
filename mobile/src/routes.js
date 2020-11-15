import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './pages/Splash';
import Welcome from './pages/Welcome';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
