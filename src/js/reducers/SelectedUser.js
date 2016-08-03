
function SelectedUser(state = {}, action) {
    switch (action.type) {
        case 'CHANGE_SELECTED_USER':
            return {
                ...state,
                index: action.index
            };
        default:
            return state;
    }
}

export default SelectedUser;