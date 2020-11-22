import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/private/Home';
import ConfirmLocation from '../pages/private/ConfirmLocation';

const { Navigator, Screen } = createStackNavigator();

export default PrivateRoutes = ({ firstAccess = false }) => (
    <Navigator 
        initialRouteName={(
            firstAccess
                ? 'ConfirmLocation'
                : 'Home'
        )}
    >
        <Screen
            options={{
                headerShown: false
            }}
            name="ConfirmLocation"
            component={ConfirmLocation}
        />
        <Screen
            options={{
                headerShown: false
            }}
            name="Home"
            component={Home}
        />
    </Navigator>
);
