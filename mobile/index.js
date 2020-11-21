
import 'react-native-gesture-handler';

import React from 'react';

import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import App from './src/App';

import store from './src/store';

import { name as appName } from './app.json';

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
