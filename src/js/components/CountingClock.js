
import React from 'react';

import Ticker from './Ticker';

const CountingClock = React.createClass({
    render() {
        let classList = ['counting-clock'];
        if (Array.isArray(this.props.classNames)) { classList = [...classList, ...this.props.classNames]; }
        const { days, hours, minutes, seconds } = this.props.timer;
        return (
            <div className={classList.join(' ')}>
                <Ticker label={days.label} value={days.value} />
                <Ticker label={hours.label} value={hours.value} />
                <Ticker label={minutes.label} value={minutes.value} />
                <Ticker label={seconds.label} value={seconds.value} tick={true} />
            </div>
        );
    }
});

export default CountingClock;