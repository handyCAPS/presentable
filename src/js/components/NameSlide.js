
import React from 'react';

import PersonelSignal from './PersonelSignal';

// TODO
// Change classes to only add classes to wrapper

const NameSlide = ({
    name,
    index,
    handleClick,
    classNamesName,
    classNamesWrap
}) => {
    const classListWrap = ['name-slider', ...classNamesWrap]
    const classListName = ['name-slider__name', ...classNamesName];
    return (
            <div className="wrapper">
                <div className={classListWrap.join(' ')}>
                    <PersonelSignal type="in" />
                    <div
                        className={classListName.join(' ')}
                        onClick={handleClick.bind(null, index)}>
                        {name}
                    </div>
                    <PersonelSignal type="out" />
                </div>
            </div>
        );
};

export default NameSlide;