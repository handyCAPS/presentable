
import React from 'react';


import PersonelItem from './PersonelItem.js'

const Main = React.createClass({

    handleChangePresence(index, isPresent) {
        this.props.changePresence(index, isPresent);
    },

    render() {
        return (
            <main className="mainWrap">
                <div className="personel">
                    <ul className="personel--list">
                        {this.props.personel.map((person, index) => {
                            let isPresent = person.In;
                            return (
                            <PersonelItem
                                key={index}
                                index={index}
                                name={person.Name}
                                isPresent={isPresent}
                                handleChangePresence={this.handleChangePresence} />
                            );
                        }, this)}
                    </ul>
                </div>
            </main>
            );
    }

});

export default Main;