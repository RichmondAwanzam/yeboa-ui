import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory'
import {rootReducers} from '../reducers/index';
import { syncHistory ,routerMiddleware} from 'react-router-redux';


// Move the react-router stuff into Redux
export const history = createBrowserHistory();
//const reduxRouterMiddleware = syncHistory(history);

// Apply all the middleware for Redux
const reduxStore = applyMiddleware(
    routerMiddleware,
    thunkMiddleware
)(createStore);

// Create the Redux Store
export const store = reduxStore(rootReducers);
//reduxRouterMiddleware.listenForReplays(store);


