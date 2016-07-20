

function Personel(state = [], action) {
    const Now = Math.floor(Date.now() / 1000);
    switch (action.type) {
        case 'CHANGE_PRESENCE':
            return state.map((person, index) => {
                if (index === action.index) {
                    return {
                        ...person,
                        In: action.isPresent,
                        LastChange: Now
                    };
                }
                return person;
            });
    }
    return state;
}

export default Personel;