
import React from 'react';

import NameSignal from './NameSignal';


const NameSlide = ({
    name,
    index,
    handleClick,
    classNames
}) => {
    const classListWrap = ['name-slider', ...classNames.wrap]
    const classListName = ['name-slider__name', ...classNames.name];
    return (
            <div className="wrapper">
                <div className={classListWrap.join(' ')}>
                    <NameSignal type="in" />
                    <div
                        className={classListName.join(' ')}
                        onClick={handleClick.bind(null, index)}>
                        {name}
                    </div>
                    <NameSignal type="out" />
                </div>
            </div>
        );
};

export default NameSlide;