import api from '../../services/api';

import {
    loadedEstablishment,
    loadedEstablishments,
    loadingEstablishments,
} from '../actions/establishments';

export const getEstablishment = id => {
    return async dispatch => {
        try {
            dispatch(loadingEstablishments());
    
            const { data } = await api.get(`/establishments/${id}`);
    
            dispatch(loadedEstablishment(data));
    
            return;
        } catch (error) {
            throw error;
        }
    };
};

export const getEstablishments = () => {
    return async dispatch => {
        try {
            dispatch(loadingEstablishments());
    
            const { data } = await api.get('/establishments');

            dispatch(loadedEstablishments(data));

            return;
        } catch (error) {
            dispatch(loadedEstablishments([]));

            throw error;
        }
    };
};
