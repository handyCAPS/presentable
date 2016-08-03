import React from 'react';


const NameSignal = ({
    type
}) => {
    let classList = ['signal', type];
    return (
        <div className={classList.join(' ')}>{type}</div>
        );
};

export default NameSignal;