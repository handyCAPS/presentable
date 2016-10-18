
import React from 'react';

import NameSignal from './NameSignal';


const NameSlide = React.createClass({
    render() {
        const {
            person,
            name,
            index,
            handleClick,
            classNames
        } = this.props;

        const classListWrap = ['name-slider', ...classNames.wrap]
        const classListName = ['name-slider__name', ...classNames.name];

        return (
                <div className="wrapper">
                    <div className={classListWrap.join(' ')}>
                        <NameSignal type="in" />
                        <div
                            className={classListName.join(' ')}
                            onClick={handleClick.bind(null, index, person)}>
                            {name}
                        </div>
                        <NameSignal type="out" />
                    </div>
                </div>
            );
    }
});

export default NameSlide;