
import React from 'react';

import PersonelList from './PersonelList';
import PersonelItem from './PersonelItem.js'

const Main = React.createClass({

    render() {
        return (
            <main className="mainWrap">
                <PersonelList {...this.props} />
            </main>
            );
    }

});

export default Main;