
import React from 'react';

const Forminput = ({
    name,
    label,
    type,
    classNames = {
        wrapper: [],
        label: [],
        input: []
    },
    atts = {}
}) => {
    const classListWrapper = [
        'form__input-wrap',
        ...classNames.wrapper
    ];
    const classListLabel = [
        'form__label',
        ...classNames.label
    ];
    const classListInput = [
        'form__input',
        ...classNames.input
    ];
    return (
        <p className={classListWrapper.join(' ')}>
            <label
                htmlFor={name}
                className={classListLabel.join(' ')}>{label}
            </label>
            <input
                type={type}
                id={name}
                {...atts}
                className={classListInput.join(' ')}/>
        </p>
    );
};

export default Forminput;