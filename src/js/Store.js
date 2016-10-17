
import { applyMiddleware, createStore } from 'redux';

import RootReducer from './reducers/index';

import { browserHistory } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';

import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const defaultState = {
    Personel: [],
    Users: [],
    SelectedUser: {
        index: 0
    },
    CurrentUser: {
        index: 0
    }
};

const Store = createStore(RootReducer, defaultState, middleware);

export const History = syncHistoryWithStore(browserHistory, Store);

export default Store;