

function Personel(state = [], action) {
    const Now = Math.floor(Date.now());
    switch (action.type) {
        case 'CHANGE_PRESENCE':
            return state.map((person, index) => {
                if (index === action.index) {
                    return {
                        ...person,
                        In: action.isPresent,
                        LastIn: action.isPresent ? person.LastIn : Now,
                        LastOut: action.isPresent ? Now: person.LastOut,
                        LastChange: Now
                    };
                }
                return person;
            });
    }
    return state;
}

export default Personel;