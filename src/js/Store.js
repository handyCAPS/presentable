
import { createStore } from 'redux';

import RootReducer from './reducers/index';

import Personel from './json/personel.json';

const defaultState = {
    Personel: Personel.personel
};

const Store = createStore(RootReducer, defaultState);

export default Store;