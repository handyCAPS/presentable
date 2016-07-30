import React from 'react';


const PersonelSignal = ({
    type
}) => {
    let classList = ['signal', type];
    return (
        <div className={classList.join(' ')}>{type}</div>
        );
};

export default PersonelSignal;