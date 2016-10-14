
import firebase from 'firebase';

export function changePresence(index) {
    return {
        type: 'CHANGE_PRESENCE',
        index
    };
}

export function changeSelectedUser(index) {
    return {
        type: 'CHANGE_SELECTED_USER',
        index
    };
}

export function listenToFirebase() {
    return (dispatch) => {
        const personelRef = firebase.database().ref().child('state').child('personel');

        personelRef.on('value', snap => {
            document.getElementsByClassName('wrapper--inner')[0].classList.add('loaded');
            const personel = snap.val();
            dispatch({
                type: 'UPDATE_PERSONEL',
                newState: personel
            });
        });
    }
}