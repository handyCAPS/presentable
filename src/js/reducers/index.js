
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Personel from './Personel';
import SelectedUser from './SelectedUser';

const RootReducer = combineReducers({
    Personel,
    SelectedUser,
    routing: routerReducer
});

export default RootReducer;