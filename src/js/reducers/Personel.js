

function Personel(state = [], action) {
    switch (action.type) {
        case 'CHANGE_PRESENCE':
            return state.map((person, index) => {
                if (index === action.index) {
                    return {
                        ...person,
                        In: action.isPresent
                    };
                }
                return person;
            });
    }
    return state;
}

export default Personel;