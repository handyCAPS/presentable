
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
    handleInOutClick() {
        this.props.changePresence(this.props.selectedUser.index);
    },
    render() {
        const User = this.props.personel[this.props.selectedUser.index];
        const isPresent = User.present;

        const classList = ['info'];
        let presenceClass = 'isNotPresent';
        let presentText = 'Nee';
        let lastLabel = 'Laatst aanwezig';
        let classNames = {
            wrap: ['info__name-slider'],
            name: []
        };

        if (isPresent) {
            presenceClass = 'isPresent';
            presentText = 'Ja';
            lastLabel = 'Laatst afwezig';
            classNames.name.push('present');
        }

        classList.push(presenceClass);

        const lastText = this.getNiceTime(User.lastChange);

        return (
            <div className={classList.join(' ')}>
                <h2 className="info__header">{User.name}</h2>
                <InfoText label="Aanwezig" text={presentText} />
                <InfoText label={lastLabel} text={lastText} />
                <CountingClock timer={Timing.getTimerObject(User.lastChange)} timestamp={User.lastChange} />
                <NameSlide
                    index={this.props.selectedUser}
                    name="Change"
                    classNames={classNames}
                    handleClick={this.handleInOutClick}/>
            </div>
            );
    }
});

export default Info;