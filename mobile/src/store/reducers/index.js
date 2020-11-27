import { combineReducers } from 'redux';

import auth from './auth';
import establishments from './establishments';

const reducers = combineReducers(
    {
        auth,
        establishments,
    }
);

export default reducers;
