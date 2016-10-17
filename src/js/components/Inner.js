import React from 'react';

import Main from './Main';
import Login from './Login';

const Inner = React.createClass({
    render() {
        // const loggedIn = this.props.user.loggedIn;
        const loggedIn = true;

        if (loggedIn) {
            return ( <Main {...this.props} /> );
        }

        return ( <Login {...this.props} /> );
    }
});

export default Inner;