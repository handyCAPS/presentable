

export function changePresence(index, isPresent) {
    return {
        type: 'CHANGE_PRESENCE',
        index,
        isPresent
    };
}

export function changeSelectedUser(index) {
    return {
        type: 'CHANGE_SELECTED_USER',
        index
    };
}