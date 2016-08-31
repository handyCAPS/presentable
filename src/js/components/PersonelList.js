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
                        if (this.props.selectedUser.index === index) {
                            classNamesName.push('isSelectedUser');
                        }
                        if (person.present) {
                            classNamesName.push('present');
                        }
                        const classNames = {
                            wrap: classNamesWrap,
                            name: classNamesName
                        };
                        return (
                            <NameSlide
                                key={index}
                                index={index}
                                name={person.name}
                                classNames={classNames}
                                handleClick={this.handleClick} />
                            );
                    })}
                </div>
            </div>
            );
    }

});

export default PersonelList;