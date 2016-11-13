import React from 'react';

import NameSlide from './NameSlide';


const PersonelList = ({
    personel,
    selectedUser = -1,
    handleClick = () => {}
}) => (
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
                        handleClick={handleClick} />
                    );
            })}
        </div>
    </div>
    );

export default PersonelList;