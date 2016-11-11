
import React from 'react';

import NameSignal from './NameSignal';


const NameSlide = ({
            name,
            index,
            handleClick = () => {},
            classNamesWrap = [],
            classNamesName = []
        }) => (
            <div className={['name-slide', ...classNamesWrap].join(' ')}
                onClick={handleClick.bind(null, index)}>
                <NameSignal type="in" />
                <div
                    className={['name-slide__name', ...classNamesName].join(' ')}>
                    {name}
                </div>
                <NameSignal type="out" />
            </div>
        );


export default NameSlide;