

export function changePresence(index) {
    return {
        type: 'CHANGE_PRESENCE',
        index
    };
}

export function changeSelectedUser(index) {
    return {
        type: 'CHANGE_SELECTED_USER',
        index
    };
}

export function updatePersonel(newState) {
    return {
        type: 'UPDATE_PERSONEL',
        newState
    };
}