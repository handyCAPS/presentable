
import React from 'react';
import firebase from 'firebase';

import 'whatwg-fetch';

import PersonelList from './PersonelList';
import Info from './Info';
import NameSlide from './NameSlide';

const Main = React.createClass({

    setFirebaseListener() {
        const personelRef = firebase.database().ref().child('state').child('personel');

        personelRef.on('value', snap => {
            document.getElementsByClassName('wrapper--inner')[0].classList.add('loaded');
            const personel = snap.val();
            this.props.updatePersonel(personel);
        });
    },

    componentDidMount() {
        this.props.listenToFirebase();
    },

    handleSelectUser(index) {
        this.props.changeSelectedUser(index);
    },

    getNameSlideClassNames(isPresent) {
        let classNames = {
            wrap: ['top-slider'],
            name: []
        };
        if (isPresent) {
            classNames.name.push('present');
        }
        return classNames;
    },

    handleSlideClick(person, loggedIn) {
        if (loggedIn) {
            return this.handleSelectUser(person.index);
        }
        this.props.changePresence(person.index, person);
    },

    render() {
        const currentUser = this.props.currentUser;
        const MainUser = this.props.personel[currentUser.index];

        const userIsLoggedIn = false;
        const userIsAdmin = false;
        return (
                <div className="wrapper wrapper--inner">
                    {userIsLoggedIn &&
                            <NameSlide
                                index={this.props.selectedUser.index}
                                name={MainUser.name}
                                classNames={this.getNameSlideClassNames(MainUser.present)}
                                handleClick={this.handleSlideClick(MainUser.index, userIsLoggedIn)} />
                    }
                    <div className="wrapper wrapper--inline wrapper--personel">
                        <PersonelList handleClick={this.handleSlideClick} userIsLoggedIn={userIsLoggedIn} {...this.props} />
                    </div>
                    {userIsAdmin &&
                        <div className="wrapper wrapper--inline wrapper--info">
                            <Info selectedUser={this.props.selectedUser.index} {...this.props} />
                        </div>
                    }

                </div>
            );
    }

});

export default Main;