
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

    fetchAndSetAllPersonel(url) {
        fetch(url)
            .then(response => response.text())
            .then(responseText => {
                const StateObject = JSON.parse(responseText);
                const Personel = StateObject.personel;
                this.props.updatePersonel(Personel);
            });
    },

    componentDidMount() {
        this.setFirebaseListener();
    },

    handleSelectUser(index) {
        this.props.changeSelectedUser(index);
    },

    getNameSlideClassNames() {
        let classNames = {
            wrap: ['top-slider'],
            name: []
        };
        if (this.props.personel[this.props.selectedUser.index].present) {
            classNames.name.push('present');
        }
        return classNames;
    },

    render() {
        const MainUser = this.props.personel[this.props.selectedUser.index];
        return (
            <main className="mainWrap">
                <h1 className="site-header">Presentable</h1>
                <div className="wrapper wrapper--inner">
                    {MainUser && <NameSlide
                        index={this.props.selectedUser.index}
                        name={MainUser.name}
                        classNames={this.getNameSlideClassNames()}
                        handleClick={this.props.changePresence.bind(null, this.props.selectedUser.index)} />}
                    <div className="wrapper wrapper__personel">
                        <PersonelList handleSelectUser={this.handleSelectUser} {...this.props} />
                    </div>
                    <div className="wrapper wrapper__info">
                        {MainUser && <Info selectedUser={this.props.selectedUser.index} {...this.props} />}
                    </div>
                </div>
            </main>
            );
    }

});

export default Main;