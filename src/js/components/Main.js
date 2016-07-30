
import React from 'react';

import PersonelList from './PersonelList';
import PersonelItem from './PersonelItem.js';
import Info from './Info';

const Main = React.createClass({

    getInitialState() {
        return {
            selectedUser: 0
        };
    },

    handleSelectUser(index) {
        this.setState({
            selectedUser: index
        });
    },

    render() {
        return (
            <main className="mainWrap">
                <h1 className="site-header">Presentable</h1>
                <div className="wrapper wrapper__personel">
                    <PersonelList selectedUser={this.state.selectedUser} handleSelectUser={this.handleSelectUser} {...this.props} />
                </div>
                <div className="wrapper wrapper__info">
                    <Info selectedUser={this.state.selectedUser} {...this.props} />
                </div>
            </main>
            );
    }

});

export default Main;