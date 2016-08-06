
import React from 'react';

import 'whatwg-fetch';

import PersonelList from './PersonelList';
import Info from './Info';
import NameSlide from './NameSlide';

const Main = React.createClass({

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
        this.fetchAndSetAllPersonel('./dist/js/json/personel.json');
    },

    handleSelectUser(index) {
        this.props.changeSelectedUser(index);
    },

    getNameSlideClassNames() {
        let classNames = {
            wrap: ['top-slider'],
            name: []
        };
        if (this.props.personel[this.props.selectedUser.index].In) {
            classNames.name.push('present');
        }
        return classNames;
    },

    render() {
        const MainUser = this.props.personel[this.props.selectedUser.index];
        return (
            <main className="mainWrap">
                <h1 className="site-header">Presentable</h1>
                {MainUser && <NameSlide
                    index={this.props.selectedUser.index}
                    name={MainUser.Name}
                    classNames={this.getNameSlideClassNames()}
                    handleClick={this.props.changePresence.bind(null, this.props.selectedUser.index)} />}
                <div className="wrapper wrapper__personel">
                    <PersonelList handleSelectUser={this.handleSelectUser} {...this.props} />
                </div>
                <div className="wrapper wrapper__info">
                    {MainUser && <Info selectedUser={this.props.selectedUser.index} {...this.props} />}
                </div>
            </main>
            );
    }

});

export default Main;