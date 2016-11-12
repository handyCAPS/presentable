import React from 'react';

import NameSlide from './NameSlide';

const PersonelList = React.createClass({

    handleClick(index) {
        console.log("index: " + index);
        this.props.handleClick(index);
    },

    render() {
        const {
            personel,
            selectedUser
        } = this.props;
        return (
            <div className="personel">
                <div className="personel__list">
                    {personel.map((person, index) => {
                        let classNamesWrap = [];
                        let classNamesName = ['personel__name'];
                        if (selectedUser.index === index) {
                            classNamesWrap.push('isSelectedUser');
                        }
                        if (person.present) {
                            classNamesName.push('present');
                        }

                        return (
                            <NameSlide
                                key={index}
                                index={index}
                                name={person.name}
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