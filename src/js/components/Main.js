
import React from 'react';
import firebase from 'firebase';

import 'whatwg-fetch';

import PersonelList from './PersonelList';
import Info from './Info';
import NameSlide from './NameSlide';

const Main = React.createClass({

    userIsAdmin: true,
    userIsSuperAdmin: true,
    userIsLoggedIn: false,

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

    setPersonPresence(index) {
        const person = this.props.personel[index];
        this.props.changePresence(index, person);
    },

    handleInfoNameSlideClick(index) {
        this.setPersonPresence(index);
    },

    handlePersonelNameSlideClick(index) {
        this.userIsSuperAdmin = false;
        if (this.userIsSuperAdmin) {
            this.setPersonPresence(index);
        } else {
            this.handleSelectUser(index);
        }
    },

    render() {
        const currentUser = this.props.selectedUser;
        const MainUser = this.props.personel[currentUser.index];

        let selectedUser = this.userIsAdmin ? currentUser : -1;
        return (
                <div className="wrapper wrapper--inner">
                    {this.userIsLoggedIn &&
                            <NameSlide
                                index={this.props.selectedUser.index}
                                name={MainUser.name}
                                classNames={this.getNameSlideClassNames(MainUser.present)}
                                handleClick={this.handleTopSlideClick} />
                    }
                    <div className="wrapper wrapper--inline wrapper--personel">
                        <PersonelList handleClick={this.handlePersonelNameSlideClick} personel={this.props.personel} selectedUser={selectedUser} />
                    </div>
                    {this.userIsAdmin &&
                        <div className="wrapper wrapper--inline wrapper--info">
                            <Info {...MainUser} handleInfoNameSlideClick={this.handleInfoNameSlideClick} />
                        </div>
                    }

                </div>
            );
    }

});

export default Main;