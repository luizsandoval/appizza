import { combineReducers } from 'redux';

import auth from './auth';
import cart from './cart';
import orders from './orders';
import establishments from './establishments';

const reducers = combineReducers(
    {
        auth,
        cart,
        orders,
        establishments,
    }
);

export default reducers;
