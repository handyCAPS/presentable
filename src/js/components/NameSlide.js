
import React from 'react';

import NameSignal from './NameSignal';


const NameSlide = ({
            person,
            name,
            index,
            handleClick = () => {},
            classNames = {
                wrap: [],
                name: []
            }
        }) => (
            <div className={['name-slide', ...classNames.wrap].join(' ')}>
                <NameSignal type="in" />
                <div
                    className={['name-slide__name', ...classNames.name].join(' ')}
                    onClick={handleClick.bind(null, index, person)}>
                    {name}
                </div>
                <NameSignal type="out" />
            </div>
        );


export default NameSlide;