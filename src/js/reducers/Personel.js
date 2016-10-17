

function Personel(state = [], action) {
    switch (action.type) {
        case 'CHANGE_PRESENCE':
            return state.map((person, index) => {
                if (index === action.index) {
                    return action.newState;
                }
                return person;
            });
        case 'PERSONEL_UPDATE_ALL':
            return action.newState;
        default:
            return state;
    }
}

export default Personel;