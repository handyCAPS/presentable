import React from 'react';

import PersonelItem from './PersonelItem';

const PersonelList = React.createClass({

    handleChangePresence(index, isPresent) {
        this.props.changePresence(index, isPresent);
    },

    handleClick(index) {
        this.props.handleSelectUser(index);
    },

    render() {
        return (
            <div className="personel">
                <div className="personel__list">
                    {this.props.personel.map((person, index) => {
                        return (
                            <PersonelItem
                                key={index}
                                index={index}
                                name={person.Name}
                                isPresent={person.In}
                                selectedUser={this.props.selectedUser}
                                handleClick={this.handleClick} />
                            );
                    })}
                </div>
            </div>
            );
    }

});

export default PersonelList;