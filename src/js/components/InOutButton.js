
import React from 'react';

const InOutButton = ({
    text,
    handleClick
}) => {
    const classList = ['info__button', 'btn', 'btn--inOut', 'btn--' + text];
    return (
        <button className={classList.join(' ')} onClick={handleClick}>{text}</button>
        );
};

export default InOutButton;