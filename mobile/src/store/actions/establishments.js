import ESTABLISHMENTS_ACTIONS_TYPES from '../types/establishments';

export const loadingEstablishments = () => (
    {
        type: ESTABLISHMENTS_ACTIONS_TYPES.ESTABLISHMENTS_LOADING,
    }
);

export const loadedEstablishments = establishments => (
    {
        type: ESTABLISHMENTS_ACTIONS_TYPES.ESTABLISHMENTS_LOADED,
        payload: establishments,
    }
);

export const loadedEstablishment = establishment => (
    {
        type: ESTABLISHMENTS_ACTIONS_TYPES.ESTABLISHMENTS_LOADED,
        payload: establishment,
    }
);
