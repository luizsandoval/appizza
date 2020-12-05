
import 'react-native-gesture-handler';

import 'dayjs/locale/pt-br';

import React from 'react';

import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import dayJs from 'dayjs';

import calendar from 'dayjs/plugin/calendar';

import App from './src/App';

import store from './src/store';

import { name as appName } from './app.json';

dayJs
    .extend(calendar);
dayJs
    .locale('pt-br');

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
