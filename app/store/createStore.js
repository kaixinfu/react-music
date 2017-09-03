import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers';

const middleware = [];

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default (initialState) => createStoreWithMiddleware(reducers, initialState)
