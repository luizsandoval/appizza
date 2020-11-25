import AsyncStorage from '@react-native-async-storage/async-storage';

import decodeToken from 'jwt-decode';

const TOKEN_KEY = '@HAPPIZZA:AUTH_TOKEN';

export const set = async (token) => {
    try {
        await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (error) {
        throw error;
    }
};

export const get = async () => {
    try {
        return await AsyncStorage.getItem(TOKEN_KEY);
    } catch (error) {
        throw error;
    }
};

export const remove = async () => {
    try {
        return await AsyncStorage.removeItem(TOKEN_KEY);
    } catch (error) {
        throw error;
    }
}

export const decode = (token) => decodeToken(token);

export const isValid = async (token) => {
    try {
        const decodedToken = decode(token);

        return decodedToken && decodedToken.exp < Date.now() / 1000;
    } catch (error) {
        throw error;
    }
}
