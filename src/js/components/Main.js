
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

    handleSlideClick(index) {
        const person = this.props.personel[index];
        console.log("Person and index: ", index, person);
        this.props.changePresence(index, person);
    },

    render() {
        const currentUser = this.props.selectedUser;
        const MainUser = this.props.personel[currentUser.index];

        const userIsLoggedIn = false;
        const userIsAdmin = true;
        return (
                <div className="wrapper wrapper--inner">
                    {userIsLoggedIn &&
                            <NameSlide
                                index={this.props.selectedUser.index}
                                name={MainUser.name}
                                classNames={this.getNameSlideClassNames(MainUser.present)}
                                handleClick={this.handleSlideClick} />
                    }
                    <div className="wrapper wrapper--inline wrapper--personel">
                        <PersonelList handleClick={this.handleSelectUser} userIsLoggedIn={userIsLoggedIn} {...this.props} />
                    </div>
                    {userIsAdmin &&
                        <div className="wrapper wrapper--inline wrapper--info">
                            <Info {...MainUser} handleInfoNameSlideClick={this.handleSlideClick} />
                        </div>
                    }

                </div>
            );
    }

});

export default Main;