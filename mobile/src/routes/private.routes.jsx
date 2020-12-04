import React from 'react';

import { Dimensions } from 'react-native';

import { useSelector } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';
import { faHome, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';

import Home from '../pages/private/Home';
import Orders from '../pages/private/Orders';
import Profile from '../pages/private/Profile';
import Feedback from '../pages/private/Feedback';
import ReviewOrder from '../pages/private/ReviewOrder';
import Establishment from '../pages/private/Establishment';
import ConfirmLocation from '../pages/private/ConfirmLocation';
import OrderDetails from '../pages/private/Orders/OrderDetails';

const { Navigator, Screen } = createStackNavigator();

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();

const Main = () => {
    const theme = useTheme();
    const { height } = Dimensions.get('window');
    const ordersInProgress = useSelector(state => state?.orders?.ordersInProgress || 0);

    return (
        <TabNavigator
            initialRouteName="Home"
            tabBarOptions={
                { 
                    style: { 
                        borderTopEndRadius: 25, 
                        borderTopStartRadius: 25, 
                        elevation: 12,
                        height: height / 10,
                    }, 
                    activeTintColor: theme.colors.secondary.main, 
                    tabStyle: { 
                        paddingTop: 32,
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
                    tabBarBadge: ordersInProgress || null,
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
    );
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
                headerShown: false,
            }}
            name="ConfirmLocation"
            component={ConfirmLocation}
        />
        <Screen
            options={{
                title: "Estabelecimento",
            }}
            name="Establishment"
            component={Establishment}
        />
        <Screen
            options={{
                title: "Revisar pedido",
            }}
            name="ReviewOrder"
            component={ReviewOrder}
        />
        <Screen
            options={{
                title: "Detalhes do pedido",
            }}
            name="OrderDetails"
            component={OrderDetails}
        />
        <Screen
            options={{
                headerShown: false,
            }}
            name="Feedback"
            component={Feedback}
        />
    </Navigator>
);
