

function Personel(state = [], action) {
    const Now = Date.now();
    switch (action.type) {
        case 'CHANGE_PRESENCE':
            const isPresent = state[action.index].present;
            return state.map((person, index) => {
                if (index === action.index) {
                    return {
                        ...person,
                        present: !isPresent,
                        lastIn: !isPresent ? parseInt(person.lastIn) : Now,
                        lastOut: !isPresent ? Now: parseInt(person.lastOut),
                        lastChange: Now
                    };
                }
                return person;
            });
        case 'UPDATE_PERSONEL':
            return action.newState;
        default:
            return state;
    }
}

export default Personel;