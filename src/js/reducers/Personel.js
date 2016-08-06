

function Personel(state = [], action) {
    const Now = Math.floor(Date.now());
    switch (action.type) {
        case 'CHANGE_PRESENCE':
            const isPresent = state[action.index].In;
            return state.map((person, index) => {
                if (index === action.index) {
                    return {
                        ...person,
                        In: !isPresent,
                        LastIn: !isPresent ? person.LastIn : Now,
                        LastOut: !isPresent ? Now: person.LastOut,
                        LastChange: Now
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