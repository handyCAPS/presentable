
import React from 'react';

const InOutButton = ({
    text,
    handleClick,
    className
}) => {
    const classList = ['info__button', 'btn', 'btn--inOut', 'btn--' + className];
    return (
        <button className={classList.join(' ')} onClick={handleClick}>{text}</button>
        );
};

export default InOutButton;