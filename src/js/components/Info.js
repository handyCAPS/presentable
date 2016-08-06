
import React from 'react';

import InfoText from './InfoText';
import NameSlide from './NameSlide';

const Info = React.createClass({
    getInitialState() {
        return {
            timer: {
                started: 0,
                timePassed: 0
            }
        };
    },
    getNiceTime(timestamp) {
        const time = new Date(timestamp);
        let mins = time.getMinutes();
        if (mins < 10) { mins = '0' + mins; }
        const timeString = time.toLocaleDateString() + " om " + time.getHours() + ':' + mins;
        return timeString;
    },
    getTimeByUnit(seconds) {
        const secondsLeft = seconds % 60;
        const minutesPassed = (seconds - secondsLeft) / 60;
        const minutesLeft = minutesPassed % 60;
        const hoursPassed = (minutesPassed - minutesLeft) / 60;
        const hoursLeft = hoursPassed % 24;
        const daysPassed = (hoursPassed - hoursLeft) / 24;
        return {
            days: daysPassed,
            hours: hoursLeft,
            minutes: minutesLeft,
            seconds: secondsLeft
        };
    },
    getPassedTime(timestamp) {
        const now = Date.now();
        const secondsPassed = Math.floor((now - timestamp) / 1000);
        const times = this.getTimeByUnit(secondsPassed);

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
        const isPresent = User.In;

        const presentText = isPresent ? 'Ja' : 'Nee';

        let classNamesName = [];
        if (isPresent) { classNamesName.push('present'); }

        let classNamesWrap = ['info__name-slider'];

        const classNames = {
            wrap: classNamesWrap,
            name: classNamesName
        };

        let lastLabel = 'Laatst ' + (isPresent ? 'afwezig' : 'aanwezig');

        return (
            <div className="info">
                <h2 className="info__header">{User.Name}</h2>
                <p>{this.getPassedTime(User.LastChange)}</p>
                <InfoText label="Aanwezig" text={presentText} />
                <InfoText label={lastLabel} text={this.getNiceTime(User.LastChange)} />
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