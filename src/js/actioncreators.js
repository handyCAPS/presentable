
import firebase from 'firebase';


export function changePresence(index, person) {
    return (dispatch) => {
        const Now = Date.now();
        const isPresent = person.present;
        const newState = {
            ...person,
            index: index,
            lastChange: Now,
            lastIn: !isPresent ? Now : person.lastIn,
            lastOut: isPresent ? Now : person.lastOut,
            present: !isPresent
        };
        // dispatch({
        //     type: 'CHANGE_PRESENCE',
        //     index,
        //     newState
        // });
        const currentUserRef = firebase.database().ref('state/personel/' + index );

        currentUserRef.set(newState);
    };
}

export function changeSelectedUser(index) {
    return {
        type: 'CHANGE_SELECTED_USER',
        index
    };
}

function updatePersonel(newState) {
    return {
        type: 'PERSONEL_UPDATE_ALL',
        newState
    };
}

export function listenToFirebase() {
    return (dispatch) => {
        const personelRef = firebase.database().ref('state/personel');

        let isFirst = true;

        personelRef.on('value', snap => {
            if (isFirst) {
                document.getElementsByClassName('wrapper--inner')[0].classList.add('loaded');
                isFirst = false;
            }
            const personel = snap.val();

            dispatch(updatePersonel(personel));
        });
    };
}

export function signUp(username, password) {
    return (dipatch) => {
        firebase.auth().signUpUserWithEmailAndPassword(username, password);
    };
}