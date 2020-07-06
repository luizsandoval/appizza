import { createContext } from 'react';

const DEFAULT_CONTEXT = {
    user: {},
    selectedPizzas: [],
    openedComponent: '',
    expandedPizza: '',
    setUser: (user) => {},
    setSelectedPizzas: (pizzas) => {},
    setExpandedPizza: (pizzaId) => {},
    setOpenedComponent: (component) => {},
};

const AppContext = createContext(DEFAULT_CONTEXT);

export default AppContext;
