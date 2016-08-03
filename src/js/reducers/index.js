
import { combineReducers } from 'redux';

import Personel from './Personel';
import SelectedUser from './SelectedUser';

const RootReducer = combineReducers({
    Personel,
    SelectedUser
});

export default RootReducer;