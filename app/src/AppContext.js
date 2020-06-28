import { createContext } from 'react';

const DEFAULT_CONTEXT = {
    user: {},
    setUser: (user) => {}
};

const AppContext = createContext(DEFAULT_CONTEXT);

export default AppContext;
