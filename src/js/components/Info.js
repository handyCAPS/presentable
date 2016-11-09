
import React from 'react';

import Timing from '../utils/Timing';

import InfoText from './InfoText';
import NameSlide from './NameSlide';
import CountingClock from './CountingClock';

const Info = React.createClass({
    getCurrentUser() {
        return this.props.personel[this.props.currentUser.id];
    },
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
    handleInOutClick(index) {
        const person = this.props.personel[index];
        this.props.changePresence(index, person);
    },
    render() {
        const User = this.props.user;
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
                <InfoText label="Laatst ingeklokt" text={this.getNiceTime(User.lastIn)} />
                <InfoText label="Laatst uitgeklokt" text={this.getNiceTime(User.lastOut)} />
                <CountingClock timer={Timing.getTimerObject(User.lastChange)} timestamp={User.lastChange} />
                <NameSlide
                    index={this.props.selectedUser.index}
                    name="Change"
                    classNames={classNames}
                    handleClick={this.handleInOutClick}/>
            </div>
            );
    }
});

export default Info;