

export function changePresence(index, isPresent) {
    return {
        type: 'CHANGE_PRESENCE',
        index,
        isPresent
    };
}