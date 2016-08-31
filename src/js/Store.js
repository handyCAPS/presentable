
import { createStore } from 'redux';

import RootReducer from './reducers/index';


const defaultState = {
    Personel: [],
    SelectedUser: {
        index: 0
    }
};

const Store = createStore(RootReducer, defaultState);

export default Store;