import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';
import { faHome, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';

import HomeScreen from '../pages/private/Home';
import OrdersScreen from '../pages/private/Home';
import ProfileScreen from '../pages/private/Home';
import ConfirmLocationScreen from '../pages/private/ConfirmLocation';

const { Navigator, Screen } = createStackNavigator();

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();

const Home = () => {
    const theme = useTheme();

    return ((
        <TabNavigator
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
                name="Início"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon color={color} icon={faHome} size={24} />,
                }}
            />
            <TabScreen
                name="Pedidos"
                component={OrdersScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon color={color} icon={faReceipt} size={24} />,
                }}
            />
            <TabScreen
                name="Meu Perfil"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon color={color} icon={faUser} size={24} />,
                }}
            />
        </TabNavigator>
    ));
};

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
            component={ConfirmLocationScreen}
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
