
import React from 'react';

import 'whatwg-fetch';

const Main = React.createClass({

    componentDidMount() {
        console.log("Stuff");
        fetch('../../getPersonel.php')
            .then(result => result.text())
            .then(text => {
                console.log("Text:" , text);
            });
    },

    render() {
        return (
            <div className="mainWrap">
                {this.props.children}
            </div>
            );
    }

});

export default Main;