
import React from 'react';

import Timing from '../utils/Timing';

import InfoText from './InfoText';
import NameSlide from './NameSlide';
import CountingClock from './CountingClock';

const Info = ({
        index,
        name,
        present,
        lastIn,
        lastOut,
        lastChange,
        handleInfoNameSlideClick = () => {}
    }) => {

        const classList = ['info'];
        let presenceClass = 'isNotPresent';
        let presentText = 'Nee';
        let lastLabel = 'Laatst aanwezig';

        let classNamesName = [];
        let classNamesWrap = ['info__name-slider'];

        if (present) {
            presenceClass = 'isPresent';
            presentText = 'Ja';
            lastLabel = 'Laatst afwezig';
            classNamesName.push('present');
        }

        classList.push(presenceClass);

        const lastText = Timing.getNiceTime(lastChange);


        return (
            <div className={classList.join(' ')}>
                <h2 className="info__header">{name}</h2>
                <InfoText label="Aanwezig" text={presentText} />
                <InfoText label={lastLabel} text={lastText} />
                <InfoText label="Laatst ingeklokt" text={Timing.getNiceTime(lastIn)} />
                <InfoText label="Laatst uitgeklokt" text={Timing.getNiceTime(lastOut)} />
                <CountingClock timer={Timing.getTimerObject(lastChange)} timestamp={lastChange} />
                <NameSlide
                    index={index}
                    name="Change"
                    classNamesName={classNamesName}
                    classNamesWrap={classNamesWrap}
                    handleClick={handleInfoNameSlideClick}/>
            </div>
            );
    };

export default Info;