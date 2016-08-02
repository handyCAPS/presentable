import React from 'react';

import NameSlide from './NameSlide';

const PersonelList = React.createClass({

    handleClick(index) {
        this.props.handleSelectUser(index);
    },

    render() {
        return (
            <div className="personel">
                <div className="personel__list">
                    {this.props.personel.map((person, index) => {
                        let classNamesWrap = [];
                        let classNamesName = ['personel__name'];
                        if (this.props.selectedUser === index) {
                            classNamesName.push('isSelectedUser');
                        }
                        if (person.In) {
                            classNamesName.push('present');
                        }
                        return (
                            <NameSlide
                                key={index}
                                index={index}
                                name={person.Name}
                                classNamesName={classNamesName}
                                classNamesWrap={classNamesWrap}
                                handleClick={this.handleClick} />
                            );
                    })}
                </div>
            </div>
            );
    }

});

export default PersonelList;