import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';
import { faHome, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';

import Home from '../pages/private/Home';
import Orders from '../pages/private/Orders';
import Profile from '../pages/private/Profile';
import Establishment from '../pages/private/Establishment';

const { Navigator, Screen } = createStackNavigator();

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();

const Main = () => {
    const theme = useTheme();

    return ((
        <TabNavigator
            initialRouteName="Home"
            tabBarOptions={
                { 
                    style: { 
                        borderTopEndRadius: 25, 
                        borderTopStartRadius: 25, 
                        elevation: 24,
                        paddingVertical: 72,
                    }, 
                    activeTintColor: theme.colors.secondary.main, 
                    tabStyle: { 
                        paddingBottom: 32 
                    },
                    labelStyle: {
                        fontSize: 12,
                        marginBottom: 8,
                    },
                    iconStyle: {
                        padding: 2,
                        marginBottom: 16
                    }
                }
            }
        >
            <TabScreen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color }) => <Icon color={color} icon={faHome} size={24} />,
                }}
            />
            <TabScreen
                name="Orders"
                component={Orders}
                options={{
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({ color }) => <Icon color={color} icon={faReceipt} size={24} />,
                }}
            />
            <TabScreen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Meu perfil',
                    tabBarIcon: ({ color }) => <Icon color={color} icon={faUser} size={24} />,
                }}
            />
        </TabNavigator>
    ));
};

export default PrivateRoutes = () => (
    <Navigator 
        initialRouteName="Main"
    >
        <Screen
            options={{
                headerShown: false
            }}
            name="Main"
            component={Main}
        />
        <Screen
            options={{
                title: "",
            }}
            name="Establishment"
            component={Establishment}
        />
    </Navigator>
);
