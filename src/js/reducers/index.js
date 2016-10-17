
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Personel from './Personel';
import SelectedUser from './SelectedUser';
import Users from './Users';
import CurrentUser from './CurrentUser';

const RootReducer = combineReducers({
    Personel,
    SelectedUser,
    Users,
    CurrentUser,
    routing: routerReducer
});

export default RootReducer;