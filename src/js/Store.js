
import { createStore } from 'redux';

import RootReducer from './reducers/index';

import Personel from './json/personel.json';

const defaultState = {
    Personel: Personel.personel,
    SelectedUser: {
        index: 0
    }
};

const Store = createStore(RootReducer, defaultState);

export default Store;