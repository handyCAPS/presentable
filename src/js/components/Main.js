
import React from 'react';

import PersonelList from './PersonelList';
import Info from './Info';
import NameSlide from './NameSlide';

const Main = React.createClass({

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
        return (
            <main className="mainWrap">
                <h1 className="site-header">Presentable</h1>
                <NameSlide
                    index={this.props.selectedUser.index}
                    name={this.props.personel[this.props.selectedUser.index].Name}
                    classNames={this.getNameSlideClassNames()}
                    handleClick={this.props.changePresence.bind(null, this.props.selectedUser.index)} />
                <div className="wrapper wrapper__personel">
                    <PersonelList handleSelectUser={this.handleSelectUser} {...this.props} />
                </div>
                <div className="wrapper wrapper__info">
                    <Info selectedUser={this.props.selectedUser.index} {...this.props} />
                </div>
            </main>
            );
    }

});

export default Main;