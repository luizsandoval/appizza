import { combineReducers } from 'redux';

import auth from './auth';
import cart from './cart';
import establishments from './establishments';

const reducers = combineReducers(
    {
        auth,
        cart,
        establishments,
    }
);

export default reducers;
