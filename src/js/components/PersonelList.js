import React from 'react';

import PersonelItem from './PersonelItem';

const PersonelList = React.createComponent({

    handleChangePresence(index, isPresent) {
        this.props.changePresence(index, isPresent);
    },

    render() {
        return (
            <div className="personel">
                {this.props.personel.map((person, index) => {
                    return (
                        <PersonelItem
                            key={index}
                            index={index}
                            name={person.Name}
                            isPresent={person.In}
                            handleChangePresence={this.handleChangePresence} />
                        );
                })}
            </div>
            );
    }

});

export default PersonelList;