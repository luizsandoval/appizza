import api from '../../services/api';

import {
    loadedEstablishments,
    loadingEstablishments,
} from '../actions/establishments';

export const getEstablishments = () => {
    return async dispatch => {
        try {
            dispatch(loadingEstablishments());
    
            const { data } = await api.get('/establishments');

            dispatch(loadedEstablishments(data));

            return;
        } catch (error) {
            throw error;
        }
    };
};
