
import firebase from 'firebase';

export function changePresence(index, currentPresence) {
    return (dispatch) => {
        const currentUser = firebase.database().ref('state/personel/' + index +'/present');
        currentUser.set(!currentPresence).then(() => {
                dispatch({
                    type: 'CHANGE_PRESENCE',
                    index
                });
        });
    };
}

export function changeSelectedUser(index) {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_SELECTED_USER',
            index
        });
    };
}

function updatePersonel(newState) {
    return {
        type: 'UPDATE_PERSONEL',
        newState
    };
}

export function listenToFirebase() {
    return (dispatch) => {
        const personelRef = firebase.database().ref('state/personel');

        personelRef.on('value', snap => {
            document.getElementsByClassName('wrapper--inner')[0].classList.add('loaded');
            const personel = snap.val();
            dispatch(updatePersonel(personel));
        });
    }
}