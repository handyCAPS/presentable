
import React from 'react';

import Timing from '../utils/Timing';

import InfoText from './InfoText';
import NameSlide from './NameSlide';
import CountingClock from './CountingClock';

const Info = React.createClass({
    getNiceTime(timestamp) {
        const time = new Date(timestamp);
        let mins = time.getMinutes();
        if (mins < 10) { mins = '0' + mins; }
        const timeString = time.toLocaleDateString() + " om " + time.getHours() + ':' + mins;
        return timeString;
    },
    getTimeString(seconds) {
        const times = Timing.getTimeByUnit(seconds);

        const verbs = {
            days: 'dagen',
            hours: 'uur',
            minutes: 'minuten',
            seconds: 'seconden'
        };

        const timeArray = [];

        for (let unit in verbs) {
            timeArray.push([times[unit], verbs[unit]]);
        }

        const timeString = timeArray.map(v => v.join(' ')).join(', ');

        return timeString;
    },
    render() {
        const {
            index,
            name,
            userIsPresent,
            lastIn,
            lastOut,
            lastChange,
            handleInfoNameSlideClick = () => {}
        } = this.props;

        const classList = ['info'];
        let presenceClass = 'isNotPresent';
        let presentText = 'Nee';
        let lastLabel = 'Laatst aanwezig';

        let classNamesName = [];
        let classNamesWrap = [];

        if (userIsPresent) {
            presenceClass = 'isPresent';
            presentText = 'Ja';
            lastLabel = 'Laatst afwezig';
            classNamesName.push('present');
        }

        classList.push(presenceClass);

        const lastText = this.getNiceTime(lastChange);

        const infoTexts = [
            {
                label: "Aanwezig",
                text: presentText
            },
            {
                label: lastLabel,
                text: lastText
            },
            {
                label: "Laatst ingeklokt",
                text: this.getNiceTime(lastIn)
            },
            {
                label: "Laatst uitgeklokt",
                text: this.getNiceTime(lastOut)
            }
        ];

        return (
            <div className={classList.join(' ')}>
                <h2 className="info__header">{name}</h2>
                {infoTexts.map((iText, i) => (
                    <InfoText key={i} label={iText.label} text={iText.text} />
                    ))}
                <CountingClock timer={Timing.getTimerObject(lastChange)} timestamp={lastChange} />
                <NameSlide
                    index={index}
                    name="Change"
                    classNamesName={classNamesName}
                    classNamesWrap={classNamesWrap}
                    handleClick={handleInfoNameSlideClick}/>
            </div>
            );
    }
});

export default Info;