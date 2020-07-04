import { createContext } from 'react';

const DEFAULT_CONTEXT = {
    user: {},
    selectedPizzas: [],
    setUser: (user) => {},
    setSelectedPizzas: (pizzas) => {},
};

const AppContext = createContext(DEFAULT_CONTEXT);

export default AppContext;
